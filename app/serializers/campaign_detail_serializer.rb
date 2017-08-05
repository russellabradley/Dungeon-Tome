class CampaignDetailSerializer < CampaignSerializer

  has_many :sessions
  has_many :quests
  has_many :loots
  has_many :characters
end
