class Loot < ApplicationRecord
  validates :gold, numericality: { only_integer: true }, allow_nil: true

  belongs_to :campaign
end
