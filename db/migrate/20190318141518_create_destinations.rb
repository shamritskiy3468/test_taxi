class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
