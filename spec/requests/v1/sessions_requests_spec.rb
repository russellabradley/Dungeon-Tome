require "rails_helper"

RSpec.describe "Session requests" do
  describe "POST /api/campaigns/:campaign_id/sessions" do
    it "creates a session for this campaign and returns session JSON." do
      usr01 = User.create!(email:"test@test.com", password:"1234")
      campaign01 = Campaign.create!(title:"test")
      char01 = Character.create!(char_name:"char_test_name", campaign: campaign01, user: usr01)

      session_params = {
        session: {
          notes: "test notes."
        }
      }

      # token = Knock::AuthToken.new(payload: { sub: usr01.id }).token

      post(
        api_v1_campaign_sessions_url(campaign01),
        params: session_params.to_json,
        headers: authorization_headers(usr01)
      )

      expect(response).to have_http_status :created
      expect_response_to_include_session
    end
  end
end
