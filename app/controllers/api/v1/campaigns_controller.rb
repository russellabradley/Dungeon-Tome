class Api::V1::CampaignsController < ApplicationController
  before_action :authenticate_user

  def index
    render json: current_user.campaigns,
           each_serializer: CampaignSerializer
  end

  def show
    campaign = Campaign.find(params[:id])
    render json: campaign,
           serializer: CampaignDetailSerializer,
           root: "campaign"
  end

  def create
    campaign = Campaign.create!(campaign_params)
    render json: campaign
  end

  private

  def campaign_params
    # binding.pry
    params.require(:campaign).permit(
      :title,
      :tagline,
      :description
    )
  end

end
