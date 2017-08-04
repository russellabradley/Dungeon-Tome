class CampaignsController < ApplicationController

  def index
    @usr = current_user
  end

end
