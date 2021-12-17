class Feedback < ApplicationRecord
  attribute :category, :string, default: "Feature"

  belongs_to :user
end
