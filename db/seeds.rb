# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

Apartment.delete_all

  30.times do |i|
    Apartment.create(title:Faker::Games::SuperMario.location, body:Faker::Games::LeagueOfLegends.quote, price:rand(50000..300000) )
  end