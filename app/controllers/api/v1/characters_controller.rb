class Api::V1::CharactersController < ApplicationController
  before_action :authenticate_user

  def create
    char_name = params[:charName]
    char_class = params[:charClass]
    campaign_id = params[:campaignId]

    # if userId is not given, set it to current_user
    if params[:userId] == nil
      user_id = current_user.id
    else
      user_id = params[:userId]
    end
    
    # Create new character
    character = Character.create!(
      campaign_id: campaign_id,
      user_id: user_id,
      char_name: char_name,
      char_class: char_class,
      )
    render json: character
  end

end
