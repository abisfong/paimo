class Api::LikesController < ApplicationController
  def create
    @like = Like.new(
      user_id: current_user.id,
      transaction_id: params[:transaction_id]
    )
    if @like.transaction_.complete && @like.save
      render json: ['Success'], status: 200
    else
      render json: ['Something went wrong'], status: 400
    end
  end

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      transaction_id: params[:id]
    )
    if @like && @like.destroy
      render json: ['Success'], status: 200
    else
      render json: ['Something went wrong'], status: 400
    end
  end
end
