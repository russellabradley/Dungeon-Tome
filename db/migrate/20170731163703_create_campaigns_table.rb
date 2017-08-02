class CreateCampaignsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :title, null: false
      t.string :tagline
      t.string :description
    end
  end
end
