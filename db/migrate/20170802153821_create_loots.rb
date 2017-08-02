class CreateLoots < ActiveRecord::Migration[5.1]
  def change
    create_table :loots do |t|
      t.integer :gold
      t.text :inventory
      t.belongs_to :campaign

      t.timestamps
    end
  end
end
