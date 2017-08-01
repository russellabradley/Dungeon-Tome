class Character < ActiveRecord::Base
  validates :name, presence: true
  validates :race, presence: true, inclusion: {in: ["dragonborn", "dwarf", "elf", "gnome", "half-elf", "half-orc", "halfling", "human", "tiefling"]}
  validates :level, numericality: { only_integer: true, allow_nil: false }, inclusion: {in: 1..20}
  validates :char_class, presence: true, inclusion: {in: ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"]}

  has_many :character_campaigns
  has_many :campaigns, through: :character_campaigns
end
