class AddPassCountToTrip < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :pass_count, :integer
  end
end
