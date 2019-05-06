Place.create!([
	{ "name": "Buckingham Palace", "latitude": "51.501564","longitude": "-0.141944"},
	{ "name": "Westminster Abbey", "latitude": "51.499581", "longitude": "-0.127309"},
	{ "name": "Big Ben", "latitude": "51.500792", "longitude": "-0.124613"}
])

20.times do 
	Driver.create(
		name: Faker::Name.name_with_middle, 
		exp_years: rand(1..10)
	)
end

20.times do 
	Car.create(
		name: Faker::Vehicle.make_and_model, 
		car_number: Faker::Vehicle.license_plate,
		car_color: Faker::Color.color_name
	)
end
