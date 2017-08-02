require 'rails_helper'

RSpec.describe Loot, type: :model do
  describe Loot do
    it { should have_valid(:gold).when(340) }
    it { should have_valid(:gold).when(nil) }
    # it { should_not have_valid(:gold).when("340") }
    it { should_not have_valid(:gold).when(340.32) }

    it { should have_valid(:inventory).when(nil) }
    it { should have_valid(:inventory).when("longsword +1, plate mail, severed head, ioun stone.") }

  end
end
