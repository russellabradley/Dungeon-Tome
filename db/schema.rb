# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170802145416) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.text "loot"
  end

  create_table "character_campaigns", force: :cascade do |t|
    t.bigint "character_id"
    t.bigint "campaign_id"
    t.index ["campaign_id"], name: "index_character_campaigns_on_campaign_id"
    t.index ["character_id"], name: "index_character_campaigns_on_character_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name", null: false
    t.string "race", null: false
    t.string "char_class", null: false
    t.integer "level", null: false
    t.integer "proficiency_bonus"
    t.text "description"
    t.text "attacks"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quests", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.bigint "campaign_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campaign_id"], name: "index_quests_on_campaign_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.text "notes", null: false
    t.bigint "campaign_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campaign_id"], name: "index_sessions_on_campaign_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
  end

end
