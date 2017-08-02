require 'rails_helper'

RSpec.describe Session, type: :model do
  describe Session do
    it { should have_valid(:notes).when("Test notes") }
    it { should_not have_valid(:notes).when("") }
    it { should_not have_valid(:notes).when(nil) }

    it { should have_valid(:title).when("Test title") }
    it { should have_valid(:title).when("") }
    it { should have_valid(:title).when(nil) }

    it { should have_valid(:date).when("4th of November") }
    it { should have_valid(:date).when("Midsummer's Eve") }
    it { should have_valid(:date).when("") }
    it { should have_valid(:date).when(nil) }

  end
end
