class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(
      transaction_id: params[:transaction_id],
      user_id: current_user.id,
      body: params[:body]
    )

    if @comment.save
      render :show, status: 200
    else
      render json: ['Something went wrong'], status: 200
    end
  end
end
