class Feedback < ApplicationRecord
  validates :title, presence: true, length: { minimum: 6, maximum: 100 }  
  validates :description, presence: true, length: { minimum: 10, maximum: 300 }
  
  attribute :category, :string, default: "Feature"

  belongs_to :user

  def belongs_to_user?(user)
    id == user.id
  end
  
end
