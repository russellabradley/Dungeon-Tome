class Api::V1::SessionsController < ApplicationController
  before_action :authenticate_user

  def create
    if campaign.users.include?(current_user)
      session = Session.create!(session_params)
      render json: session,
             serializer: SessionSerializer,
             status: :created
    end
  end

  def patch
    if campaign.users.include?(current_user)
      # patch request here to edit session
    end
  end

  private

  def session_params
    params.require(:session).permit(
      :title,
      :notes,
      :date
    ).merge(
      campaign: campaign
    )
  end

  def campaign
    campaign ||= Campaign.find(params["campaign_id"])
  end

end
