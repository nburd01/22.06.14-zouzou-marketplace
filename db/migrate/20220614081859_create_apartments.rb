class CreateApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :apartments do |t|
      t.string :title
      t.text :body
      t.integer :price

      t.timestamps
    end
  end
end
