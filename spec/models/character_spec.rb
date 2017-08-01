require 'rails_helper'

RSpec.describe Character, type: :model do
    it { should have_valid(:name).when("Test Name") }
    it { should_not have_valid(:name).when(nil) }
    it { should_not have_valid(:name).when("") }

    it { should have_valid(:race).when("half-orc") }
    it { should have_valid(:race).when("elf") }
    it { should have_valid(:race).when("human") }
    it { should_not have_valid(:race).when(nil) }
    it { should_not have_valid(:race).when("test") }
    it { should_not have_valid(:race).when(4) }

    it { should have_valid(:char_class).when("paladin") }
    it { should have_valid(:char_class).when("rogue") }
    it { should_not have_valid(:char_class).when("Paladin") }
    it { should_not have_valid(:char_class).when("test") }
    it { should_not have_valid(:char_class).when(nil) }
    it { should_not have_valid(:char_class).when(4) }

    it { should have_valid(:level).when(1) }
    it { should have_valid(:level).when(7) }
    it { should have_valid(:level).when(20) }
    it { should_not have_valid(:level).when(0) }
    it { should_not have_valid(:level).when(21) }
    it { should_not have_valid(:level).when(4.5) }

end
