class Api::LikesController < ApplicationController
  def create
    @like = Like.new(
      user_id: current_user.id,
      transaction_id: params[:transaction_id]
    )
    @like.save
    render json: ['Success'], stats: 200
  end

  def destory
  end
end
