class Session < ApplicationRecord
  validates :notes, presence: true

  belongs_to :campaign
end
