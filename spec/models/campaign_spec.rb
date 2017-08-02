require 'rails_helper'

RSpec.describe Campaign, type: :model do
  describe Campaign do
    it { should have_valid(:title).when("Test Name") }
    it { should_not have_valid(:title).when(nil) }
    it { should_not have_valid(:title).when("") }

    it { should have_valid(:description).when(nil) }
    it { should have_valid(:description).when("Go fight some orcs") }
    it { should have_valid(:description).when(4) }

    it { should have_valid(:tagline).when(nil) }
    it { should have_valid(:tagline).when("Save the land from an evil bad guy!") }
    it { should have_valid(:tagline).when(4) }

  end
end
