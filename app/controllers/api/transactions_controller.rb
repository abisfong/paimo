class Api::TransactionsController < ApplicationController
  before_action :require_logged_in

  def create
    self.restrict_to_current_user
    @transactions = self.create_transactions

    begin
      Transaction.transaction do
        @transactions.each |tranaction| do
          transaction.save!
        end
      end
    rescue ActiveRecord::RecordInvalid exception
      render json: exception.message, status: 400
    end
    render :show, status: 200
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
    category = transaction_params.category
    @transactions = []

    selections.each | _, selection | do
      @transactions.push(
        Transaction.new(
          payer_id: category == 'payment' ? current_user.id : selection,
          payee_id: category == 'request' ? current_user.id : selection,
          amount: transaction_params.amount,
          note: transaction_params.note,
          category: category
          sticker: transaction_params.sticker
          privacy: transaction_params.privacy || 'private'
          complete: category == 'payment' ? true : false
        )
      )
    end
  end

  def transaction_params
    params.require(:transaction).permit(
      :amount,
      :note,
      :sticker,
      :category,
      :privacy
    )
  end
end
