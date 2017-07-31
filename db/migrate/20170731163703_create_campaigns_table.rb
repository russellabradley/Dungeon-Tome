class CreateCampaignsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :title, null: false
      t.string :description
      t.text :loot
    end
  end
end
