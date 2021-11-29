class Api::TransactionsController < ApplicationController
  def create
    @transaction = Transaction.new(transaction_params)
    if @transaction
      
    else
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
end
