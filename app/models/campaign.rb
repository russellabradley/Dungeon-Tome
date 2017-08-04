class Campaign < ApplicationRecord
  validates :title, presence: true

  has_many :quests
  has_many :sessions
  has_many :loots
  has_many :characters
  has_many :users, through: :characters
end
