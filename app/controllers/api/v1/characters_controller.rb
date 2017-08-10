class Api::V1::CharactersController < ApplicationController
  before_action :authenticate_user

  def create
    # binding.pry
    char_name = params[:charName]
    char_class = params[:charClass]
    campaign_id = params[:campaignId]
    # Does not work for adding other users to a campaign
    user_id = current_user.id
    character = Character.create!(
      campaign_id: campaign_id,
      user_id: user_id,
      char_name: char_name,
      char_class: char_class,
      )
    render json: character
  end

end
