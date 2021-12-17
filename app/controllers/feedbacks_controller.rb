class FeedbacksController < ApplicationController
  before_action :authenticate_user!

  def new
    @feedback = Feedback.new
    @categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]
  end

  def create
    @feedback = Feedback.new(feedback_params)
    new_feedback = current_user.feedbacks.build(@feedback)

    if new_feedback.save
      redirect_to new_feedback
    else
      render :new
    end

  end

  def show
    
  end

  private

  def feedback_params
    params.require(:feedback).permit(:title, :description, :category)
  end
end
