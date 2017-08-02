class Campaign < ApplicationRecord
  validates :title, presence: true

  has_many :quests
  has_many :sessions
  has_many :loots
end
