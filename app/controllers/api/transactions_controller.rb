class Api::TransactionsController < ApplicationController
  before_action :require_logged_in

  def create
    self.create_transactions
    self.get_transaction_users(current_user.id)
    self.save_new_transactions

    render :index, status: 200
  end

  def index
    self.get_user_transactions(params[:user_id])
    self.get_transaction_users(params[:user_id].to_i)

    render :index, status: 200
  end

  def destroy
    @transaction = Transaction.find(params[:id])

    if @transaction.payee_id == current_user.id && !@transaction.complete
      render json: ['Your request has been cancled'], status: 200;
    else
      render json: ['Something went wrong'], status: 400
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

  def save_new_transactions
    begin
      Transaction.transaction do
        @transactions.each do |transaction|
          transaction.save!
        end
      end
    rescue ActiveRecord::RecordInvalid => exception
      return render json: exception.message, status: 400
    end
  end

  def get_user_transactions(user_id)
    @transactions = Transaction
    .includes(:payer, :payee)
    .all.where(
      '(payer_id = ? OR payee_id = ?) AND complete = true',
      user_id,
      user_id
    )
    .order(created_at: 'asc')
    .limit(10)
    .offset(10 * params[:page].to_i)
    .reverse_order
  end

  def get_transaction_users(user_id)
    @users = @transactions.map do |transaction|
      transaction.payee_id != user_id ? 
        transaction.payee : transaction.payer
    end
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
