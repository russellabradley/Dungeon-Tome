class Api::V1::CampaignsController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def index
    # campaigns = Campaign.all
    # render json: { albums: albums_data }, adapter: :json
    render json: Campaign.all
  end


end
