class CreateSessions < ActiveRecord::Migration[5.1]
  def change
    create_table :sessions do |t|
      t.string :title
      t.string :date
      t.text :notes, null: false
      t.belongs_to :campaign

      t.timestamps
    end
  end
end
