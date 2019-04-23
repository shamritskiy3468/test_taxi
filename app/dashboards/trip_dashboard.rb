require "administrate/base_dashboard"

class TripDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    car: Field::BelongsTo,
    driver: Field::BelongsTo,
    user: Field::BelongsTo,
    id: Field::Number,
    name: Field::String,
    pass_count: Field::Number,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :car,
    :driver,
    :user,
    :id,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :car,
    :driver,
    :user,
    :id,
    :name,
    :pass_count,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :car,
    :driver,
    :user,
    :name,
    :pass_count,
  ].freeze

  # Overwrite this method to customize how trips are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(trip)
  #   "Trip ##{trip.id}"
  # end
end
