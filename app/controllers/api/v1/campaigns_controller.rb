class Api::V1::CampaignsController < ApplicationController
  before_action :authenticate_user

  def index
    render json: Campaign.all
  end


end
