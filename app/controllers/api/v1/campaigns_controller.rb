class Api::V1::CampaignsController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_user

  def index
    # campaigns = Campaign.all
    # render json: { albums: albums_data }, adapter: :json
    binding.pry
    render json: Campaign.all
  end


end
