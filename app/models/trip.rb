class Trip < ApplicationRecord
  belongs_to :car
  belongs_to :driver
  belongs_to :user
  has_one :place
  has_one :destination
end
