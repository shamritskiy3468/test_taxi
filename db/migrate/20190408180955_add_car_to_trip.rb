class AddCarToTrip < ActiveRecord::Migration[5.2]
  def change
    add_reference :trips, :car, foreign_key: true
  end
end
