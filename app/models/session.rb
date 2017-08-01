class Park < ApplicationRecord
  validates :notes, presence: true

  belongs_to :campaign
end
