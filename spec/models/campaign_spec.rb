require 'rails_helper'

RSpec.describe Campaign, type: :model do
  describe Campaign do
    it { should have_valid(:title).when("Test Name") }
    it { should_not have_valid(:title).when(nil) }
    it { should_not have_valid(:title).when("") }

    it { should have_valid(:description).when(nil) }
    it { should have_valid(:description).when("Go fight some orcs") }
    it { should have_valid(:description).when(4) }

    it { should have_valid(:loot).when("400 gold, 34 platinum, +3 broadsword") }
    it { should have_valid(:loot).when(nil) }
  end
end
