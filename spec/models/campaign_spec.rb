require 'rails_helper'

RSpec.describe Campaign, type: :model do
  it { should have_valid(:title).when ("Curse of Strahd") }

end
