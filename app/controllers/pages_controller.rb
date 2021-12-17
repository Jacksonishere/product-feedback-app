class PagesController < ApplicationController
  def index
    @feedbacks = Feedback.all()
    @categories = ["Feature", "UI", "UX", "Enhancement", "Bug"]
    @filters = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"]
  end
end
