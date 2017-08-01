class Campaign < ApplicationRecord
  validates :title, presence: true

  has_many :quests
  has_many :sessions
  has_many :character_campaigns
  has_many :characters, through: :character_campaigns
end
