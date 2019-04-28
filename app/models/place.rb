class Place < ApplicationRecord
	belongs_to :trip
	validates_presence_of :latitude, :longitude
end
