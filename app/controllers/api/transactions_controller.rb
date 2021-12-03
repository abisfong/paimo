class Api::TransactionsController < ApplicationController
  before_action :require_logged_in

  def create
    @transaction = Transaction.new(transaction_params)
    amount = @transaction.amount
    message = []

    if current_user.id != @transaction.payer_id && 
       current_user.id != @transaction.payee_id
      return render json: ["Something went wrong"], status: 400
    end

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
    .order('created_at')
    .limit(10)
    .offset(10 * params[:page].to_i)

    @users = @transactions.map do |transaction|
      transaction.payee.id != params[:user_id] ? transaction.payee : transaction.payer
    end

    p @users

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

  def transaction_params
    params.require(:transaction).permit(
      :payer_id,
      :payee_id,
      :amount,
      :note,
      :sticker,
      :privacy,
      :complete
    )
  end
end
