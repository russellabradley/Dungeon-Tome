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

end
