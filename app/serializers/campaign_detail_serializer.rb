class CampaignDetailSerializer < CampaignSerializer
  attributes :user_id

  has_many :sessions
  has_many :quests
  has_many :loots
  has_many :characters

  def user_id
    current_user.id
  end
end
