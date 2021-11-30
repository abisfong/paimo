class Api::TransactionsController < ApplicationController
  def create
    @transaction = Transaction.new(transaction_params)
    amount = @transaction.amount
    transactee_name = transactee_params[:name]
    message = []

    if current_user.id === @transaction.payer_id
      message = ["You paid your friend: #{transactee_name} $#{amount.to_f / 100}"]
    elsif current_user.id === @transaction.payee_id
      message = ["You've asked your friend: #{transactee_name} to make a payment"]
    else
      return render json: ["Something went wrong"], status: 400
    end

    if @transaction.save
      render json: message, status: 200
    else
      render json: @transaction.errors.full_messages, status: 400
    end
  end

  def destroy
    @transaction = Transaction.find(params[:id])

    # if @transaction.payer_id != current_user.id || 
  end

  def transaction_params
    params.require(:transaction).permit(
      :payer_id,
      :payee_id,
      :amount,
      :body,
      :sticker,
      :privacy,
      :complete
    )
  end

  def transactee_params
    params.require(:transactee).permit(
      :name
    )
  end
end
