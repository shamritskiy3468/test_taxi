class AddTripToDestination < ActiveRecord::Migration[5.2]
  def change
    add_reference :destinations, :trip, foreign_key: true
  end
end
