module Helpers
  module RequestExpectations

    def expect_response_to_include_session
      expect_response_to_include_session_at_path('session')
    end

    def expect_response_to_include_session_at_path(path)
      expect(body).to have_json_path(path)
      expect(body).to have_json_path("#{path}/id")
      expect(body).to have_json_path("#{path}/notes")
      expect(body).to have_json_path("#{path}/date")
      expect(body).to have_json_path("#{path}/title")
    end
  end
end
