class CreateCharactersTable < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.belongs_to :campaign
      t.belongs_to :user
      t.string :char_name, null: false
      t.string :char_class

      t.timestamps
    end
  end
end
