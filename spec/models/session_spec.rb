require 'rails_helper'

RSpec.describe Session, type: :model do
  describe Session do
    it { should have_valid(:notes).when("Test notes") }
    it { should_not have_valid(:notes).when("") }
    it { should_not have_valid(:notes).when(nil) }

  end
end
