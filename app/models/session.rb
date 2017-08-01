class Park < ActiveRecord::Base
  validates :notes, presence: true

  belongs_to :campaign
end
