class Quest < ApplicationRecord
  validates :title, presence: true

  belongs_to :campaign
end
