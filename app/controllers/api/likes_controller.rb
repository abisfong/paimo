class Api::LikesController < ApplicationController
  def create
    @like = Like.new(
      user_id: current_user.id,
      transaction_id: params[:transaction_id]
    )
    @like.save
    render json: ['Success'], status: 200
  end

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      transaction_id: params[:transaction_id]
    )
    @like.destroy if @like
    render json: ['Success'], status: 200
  end
end
