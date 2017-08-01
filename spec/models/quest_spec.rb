require 'rails_helper'

RSpec.describe Quest, type: :model do
  describe Quest do
    it { should have_valid(:title).when("Test quest Name") }
    it { should_not have_valid(:title).when("") }
    it { should_not have_valid(:title).when(nil) }

    it { should have_valid(:description).when("") }
    it { should have_valid(:description).when("Rescue Princess Buttercup from the Fireswamp.") }
    it { should have_valid(:description).when(nil) }
    it { should have_valid(:description).when("Watch out for ROUS's") }
    it { should have_valid(:description).when(4) }
    it { should have_valid(:description).when(4.3) }

  end
end
