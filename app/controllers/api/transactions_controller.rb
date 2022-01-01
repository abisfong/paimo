class Api::TransactionsController < ApplicationController
  before_action :require_logged_in

  def create
    self.restrict_to_current_user

    @transactions = self.create_transactions

    if @transaction.save
      render :show, status: 200
    else
      render json: @transaction.errors.full_messages, status: 400
    end
  end

  def index
    @transactions = Transaction
    .includes(:payer, :payee)
    .all.where(
      '(payer_id = ? OR payee_id = ?) AND complete = true',
      params[:user_id],
      params[:user_id]
    )
    .order('created_at DESC')
    .limit(10)
    .offset(10 * params[:page].to_i)
    .reverse_order

    @users = @transactions.map do |transaction|
      transaction.payee_id != params[:user_id].to_i ? 
        transaction.payee : transaction.payer
    end

    render :index
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

  def restrict_to_current_user
    if current_user.id != @transaction.payer_id && 
       current_user.id != @transaction.payee_id
      return render json: ["Something went wrong"], status: 400
    end
  end

  def create_transactions
    selections = params[:selections]
    amount = transaction_params.amount
    note = transaction_params.note
    @transactions = []

    selections.each |key| do
      @transactions.push(
        amount: amount,
        note: note,
        
      )
    end
  end

  def transaction_params
    params.require(:transaction).permit(
      :amount,
      :note,
      :sticker,
      :category,
    )
  end
end
