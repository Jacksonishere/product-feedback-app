class FeedbacksController < ApplicationController
  before_action :authenticate_user!
  before_action :feedback_categories, only: [:new, :create]

  def new
    @feedback = Feedback.new
  end

  def create
    @feedback = current_user.feedbacks.build(feedback_params)

    if @feedback.save
      redirect_to @feedback
    else
      render :new
    end

  end

  def show
    @feedback = Feedback.find(params[:id])
  end

  private

  def feedback_params
    params.require(:feedback).permit(:title, :description, :category)
  end

  def feedback_categories
    @categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]
  end
end
