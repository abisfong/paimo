class Api::TransactionsController < ApplicationController
  before_action :require_logged_in

  def create
    self.create_transactions
    self.get_transaction_users(current_user.id)
    if self.validate_sufficient_funds(@transactions) && self.save_new_transactions
      current_user.amount -= @amount_total
      current_user.save
      render json: ['Success'], status: 400
    else
      render json: [@error_message], status: 400
    end
  end

  def index
    self.get_user_transactions(params[:user_id])
    self.get_transaction_users(params[:user_id].to_i)
  end

  def show
    @transaction = Transaction
      .includes(:payer, :payee, comments: [:user])
      .find(params[:id])
    self.get_transaction_comments_users
    
    if @transaction
      render :show
    else
      render json: ['Something went wrong'], status: 200
    end
  end

  def update
    # Remove amount after transaction is paid **********
    @transaction = Transaction.find(params[:id])
    payer_id = @transaction.payer_id
    payee_id = @transaction.payee_id
    
    if payer_id != current_user.id || @transaction.complete
      render json: ['Something went wrong'], status: 400
    else
      @transaction.update(complete: true, created_at: Time.now)
      render :show, status: 200
    end
  end

  def destroy
    @transaction = Transaction
      .includes(:likes)
      .find(params[:id])
    payer_id = @transaction.payer_id
    payee_id = @transaction.payee_id

    if (payer_id != current_user.id && payee_id != current_user.id) || @transaction.complete
      render json: ['Something went wrong'], status: 400
    else
      message = current_user.id === payer_id ? 
        'The request has been declined' :
        'Your request has been cancled'
      @transaction.destroy
      render json: [message], status: 200;
    end
  end

  private

  def create_transactions
    selections = transaction_params['selections']
    category = transaction_params['category']
    @transactions = []

    selections.each do | selection_id, selection |
      @transactions.push(
        Transaction.new(
          payer_id: category == 'payment' ? current_user.id : selection_id,
          payee_id: category == 'request' ? current_user.id : selection_id,
          amount: transaction_params['amount'],
          note: transaction_params['note'],
          category: category,
          sticker: transaction_params['sticker'],
          privacy: transaction_params['privacy'] || 'private',
          complete: category == 'payment' ? true : false
        )
      )
    end
  end

  def validate_sufficient_funds(transactions)
    @amount_total = transactions.inject(0) do |sum, transaction| 
      transaction.amount + sum
    end
    if @amount_total <= current_user.amount
      return true
    else
      @error_message = 'Insufficient funds'
      return false
    end
  end

  def save_new_transactions
    begin
      Transaction.transaction do
        @transactions.each do |transaction|
          transaction.save!
        end
      end
    rescue ActiveRecord::RecordInvalid => exception
      @error_message = exception.message
      return false;
    end
    return true
  end

  def get_user_transactions(user_id)
    completedTransactions = Transaction
      .includes(:payer, :payee, :likes, :comments)
      .all.where(
        '(payer_id = ? OR payee_id = ?) AND complete = true',
        user_id,
        user_id
      )
      .order(created_at: 'desc')
      .limit(10)
      .offset(10 * params[:page].to_i)
    incompleteTransactions = current_user.id == user_id.to_i ? Transaction
      .includes(:payer, :payee)
      .all.where(
        '(payer_id = ? OR payee_id = ?) AND complete = false',
        user_id,
        user_id
      ) : []
    @transactions = completedTransactions + incompleteTransactions
  end

  def get_transaction_users(user_id)
    @users = @transactions.map do |transaction|
      transaction.payee_id != user_id ? 
        transaction.payee : transaction.payer
    end
    @users.push(current_user)
  end

  def get_transaction_comments_users
    users_hash = {}
    @transaction.comments.each do |comment|
      users_hash[comment.user] = true;
    end
    @users = users_hash.keys
    @users.push(@transaction.payer, @transaction.payee)
  end

  def transaction_params
    params.require(:transaction).permit(
      :amount,
      :note,
      :sticker,
      :category,
      :privacy,
      selections: {}
    )
  end
end
