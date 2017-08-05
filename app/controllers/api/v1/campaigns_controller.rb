class Api::V1::CampaignsController < ApplicationController
  before_action :authenticate_user

  def index
    render json: current_user.campaigns
  end

  def show
    campaign = Campaign.find(params[:id])
    campaign_data = {
      campaign: campaign,
      sessions: campaign.sessions.sort_by { |s| s.created_at },
      loot: campaign.loots.first,
      quests: campaign.quests,
      characters: campaign.characters
    }
    render json: campaign_data
  end

end
