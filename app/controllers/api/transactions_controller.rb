class Api::TransactionsController < ApplicationController
  before_action :require_logged_in

  def create
    if !create_transactions
      return render json: ['Please select whom to pay/request'], status: 400
    end
    get_transaction_users(current_user.id)
    if (transaction_params['category'] === 'request' || validate_sufficient_funds(@transactions)) && save_new_transactions
      update_user_amounts
      render :index, status: 200
    else
      render json: @error_messages, status: 400
    end
  end

  def index
    get_user_transactions(params[:user_id])
    get_transaction_users(params[:user_id].to_i)
  end

  def show
    @transaction = Transaction
      .includes(:payer, :payee, comments: [:user])
      .find(params[:id])
    get_transaction_comments_users
    
    if @transaction
      render :show
    else
      render json: ['Something went wrong'], status: 200
    end
  end

  def update
    @transaction = Transaction.find(params[:id])
    payer_id = @transaction.payer_id
    
    if payer_id != current_user.id || @transaction.complete || !validate_sufficient_funds([@transaction])
      render json: ['Something went wrong'], status: 400
    else
      update_user_amount(current_user, -@transaction.amount)
      update_user_amount(@transaction.payee, @transaction.amount)
      @transaction.update(complete: true, created_at: Time.now)
      @users = [current_user]
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
    amount = transaction_params['amount']
    category = transaction_params['category']
    selections = transaction_params['selections']
    @transactions = []

    return false if !selections

    selections.each do | selection_id, selection |
      @transactions.push(
        Transaction.new(
          payer_id: category == 'payment' ? current_user.id : selection_id,
          payee_id: category == 'request' ? current_user.id : selection_id,
          amount: amount.length == 0 ? '0' : amount,
          note: transaction_params['note'],
          category: category,
          sticker: transaction_params['sticker'],
          privacy: transaction_params['privacy'] || 'private',
          complete: category == 'payment' ? true : false
        )
      )
    end

    return true
  end

  def validate_sufficient_funds(transactions)
    @amount_total = transactions.inject(0) do |sum, transaction| 
      transaction.amount + sum
    end
    if @amount_total <= current_user.amount
      return true
    else
      @error_messages = ['Insufficient funds']
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
      @error_messages = exception.message.split(': ')[1].split(',')
      return false;
    end
    return true
  end

  def update_user_amounts
    return if transaction_params['category'] != 'payment'
    update_user_amount(current_user, -@amount_total)
    @users.each do |user|
      if user.id != current_user.id
        update_user_amount(user, transaction_params['amount'].to_i)
      end
    end
  end

  def update_user_amount(user, amount)
    user.amount += amount
    user.save
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
      # .limit(10)
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
