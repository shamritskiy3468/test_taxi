class AddCarIdToTrip < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :car_id, :integer
  end
end
