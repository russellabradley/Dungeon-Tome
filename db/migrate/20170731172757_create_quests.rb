class CreateQuests < ActiveRecord::Migration[5.1]
  def change
    create_table :quests do |t|
      t.string :title, null: false
      t.string :description
      t.boolean :completed, :default => false
      t.belongs_to :campaign

      t.timestamps
    end
  end
end
