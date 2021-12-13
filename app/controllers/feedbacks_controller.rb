class FeedbacksController < ApplicationController
  before_action :authenticate_user!

  def new
    @feedback = Feedback.new
  end
end
