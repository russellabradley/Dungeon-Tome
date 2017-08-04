class User < ActiveRecord::Base
  has_secure_password

  has_many :characters
  has_many :campaigns, through: :characters
end
