class CreateDrives < ActiveRecord::Migration[5.2]
  def change
    create_table :drives do |t|
      t.integer :driver_id
      t.integer :car_id
      t.integer :user_id
      t.integer :place_id
      t.integer :destination_id

      t.timestamps
    end
  end
end
