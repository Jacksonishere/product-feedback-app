class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  validates :username, presence: true, 
         uniqueness: { case_sensitive: false}, 
         length: {minimum: 3, maximum: 25}

  validates :full_name, presence: true

  has_many :feedbacks
end
