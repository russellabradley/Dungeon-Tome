class Quest < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :campaign
end
