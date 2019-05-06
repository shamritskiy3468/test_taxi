class Trip < ApplicationRecord
  belongs_to :car
  belongs_to :driver
  belongs_to :user
  has_one :place, dependent: :destroy
  has_one :destination, dependent: :destroy
  accepts_nested_attributes_for :place
  accepts_nested_attributes_for :destination
  validates_presence_of :place, :destination
end
