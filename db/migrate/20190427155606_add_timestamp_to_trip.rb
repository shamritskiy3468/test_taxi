class AddTimestampToTrip < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :trips, null: true  			  
  end
end
