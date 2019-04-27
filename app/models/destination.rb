class Destination < ApplicationRecord
	belongs_to :trip, optional: true
	validates_presence_of :latitude, :longitude
end
