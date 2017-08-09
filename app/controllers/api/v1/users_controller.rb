class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user, only:[:search]

  def create
    data = JSON.parse(request.body.read)
    user = User.new(data)
    if user.valid?
      user.save
      # render json: {status: "success"}
    else
      # render json: {errors: user.errors}
    end
  end

  def search
    user = User.find_by(email: params[:email]) # look into activerecord search functions
    if user == nil
      render json: {status: "No user found"}
    elsif user.campaigns.find_by_id(params[:campaignId]) # if the user already is part of that campaign
      render json: {status: "That user already has a character in this campaign."}
    else
      # render json email and id for searched user so they can be used to make a character
      render json: { user: {user_id: user.id, user_email: user.email} }
    end
  end

end
