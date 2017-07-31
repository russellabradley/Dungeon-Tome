class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name, null: false
      t.string :race, null: false
      t.string :class, null: false
      t.integer :level, null: false
      t.integer :proficiency_bonus
      t.text :description
      t.text :attacks

      t.timestamps
    end
  end
end
