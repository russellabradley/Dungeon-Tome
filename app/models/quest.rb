class Quest < ApplicationRecord
  validates :title, presence: true
  # validates :boolean_field_name, inclusion: { in: [true, false] }

  belongs_to :campaign
end
