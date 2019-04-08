class Trip < ApplicationRecord
  belongs_to :car
  belongs_to :driver
end
