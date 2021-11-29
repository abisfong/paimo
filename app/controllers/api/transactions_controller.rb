class Api::TransactionsController < ApplicationController
  def create
    @transaction = Transaction.new(transaction_params)
    amount = @transaction.amount
    t_name = transactionee_params[:name]
    t_id = transactionee_params[:id]

    @transaction.amount *= 100

    if @transaction.save
      if current_user.id === @transaction.payer_id
        render json: ["You paid your friend: #{t_name} $#{amount}"], status: 200
      elsif current_user.id === t_id
        render json: ["You've asked your friend: #{t_name} to make a payment"], status: 200
      else
        render json: ["Something went wrong"], status: 400
      end
    else
      render json: @transaction.errors.full_messages, status: 400
    end
  end

  def destroy
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

  def transactionee_params
    params.require(:transactionee).permit(
      :name
    )
  end
end
