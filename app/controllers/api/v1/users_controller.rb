class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user

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
    # binding.pry
    # params[:email] is the query from front end
    render json: { users: user }
  end

end
