class PagesController < ApplicationController
  def index
    @feedbacks = Feedback.all()
  end
end
