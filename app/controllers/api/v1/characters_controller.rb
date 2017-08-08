class Api::V1::CharacetrsController < ApplicationController

  def create
    data = JSON.parse(request.body.read)
    # binding.pry
    character = Character.new(data)
    if character.valid?
      character.save
    end
  end

end
