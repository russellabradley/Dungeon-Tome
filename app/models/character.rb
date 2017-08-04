class Character < ActiveRecord::Base
  validates :char_name, presence: true

  belongs_to :campaign
  belongs_to :user
end
