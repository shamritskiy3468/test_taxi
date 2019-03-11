class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :car_number
      t.string :car_color

      t.timestamps
    end
  end
end
