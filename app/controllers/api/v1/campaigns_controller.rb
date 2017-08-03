class Api::V1::CampaignsController < ApplicationController
  before_action :authenticate_user

  def index
    render json: Campaign.all
  end

  def show
    campaign = Campaign.find(params[:id])
    render json: campaign
  end


end
