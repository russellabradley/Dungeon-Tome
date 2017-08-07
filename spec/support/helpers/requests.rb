module Helpers
  module Requests

    def authorization_headers(user)
      {
        'Content-Type': 'application/json',
        'Authorization': "Bearer #{token(user)}"
      }
    end

    def token(user)
      Knock::AuthToken.new(payload: { sub: user.id }).token
    end

  end
end
