class Trip < ApplicationRecord
  has_one :car
  has_one :driver
end
