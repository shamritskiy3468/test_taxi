require "administrate/base_dashboard"

class CarDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    name: Field::String,
    car_number: Field::String,
    car_color: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze
  COLLECTION_ATTRIBUTES = [
    :id,
    :name,
    :car_number,
    :car_color,
  ].freeze
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :name,
    :car_number,
    :car_color,
    :created_at,
    :updated_at,
  ].freeze
  FORM_ATTRIBUTES = [
    :name,
    :car_number,
    :car_color,
  ].freeze
  
  def display_resource(car)
    "Car ##{car.id}"
  end
end
