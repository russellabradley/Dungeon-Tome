# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CAMPAIGNS = [
  {
    title: "Curse of Strahd",
    tagline: "The vampire Strahd is having you for dinner...",
    description: "The ancient and powerful vampire Strahd von Zarovich has trapped the land of Barovia in darkness. Only you brave heroes can recover the ancient artifacts to beat him once and for all, and free the land of Barovia from darkness and despair."
  },
  {
    title: "The Storm King's Thunder",
    tagline: "Once again the giants begin to arise...",
    description: "The giant tribes are on the move. The storm king has called for the giant tribes to once more try to conquer the lands of Faerun. It is up to a team of heroes to stop them, and uncover the true reason behind the storm king's thunder!"
  },
  {
    title: "Princes of the Apocalypse",
    tagline: "Abolish an ancient evil threatening devastation in the land of Faerun!",
    description: "Called by the Elder Elemental Eye to serve, four corrupt prophets have risen from the depths of anonymity to claim mighty weapons with direct links to the power of the elemental princes. Each of these prophets has assembled a cadre of cultists and creatures to serve them in the construction of four elemental temples of lethal design. It is up to adventurers from heroic factions such as the Emerald Enclave and the Order of the Gauntlet to discover where the true power of each prophet lay, and dismantle it before it comes boiling up to obliterate the Realms."
  }
]

CAMPAIGNS.each do |c|
  campaign = Campaign.find_or_initialize_by(title: c[:title])
  campaign.assign_attributes(c)
  campaign.save!
end


SESSIONS = [
  {
  title: "First session",
  date: "October 1st",
  notes: "The party met in town and talked to the blacksmith.",
  campaign_id: 1
  },
  {
    title: "Second session",
    date: "November 4",
    notes: "The party ventured forth into Barovia and fought some zombies.",
    campaign_id: 1
  },
  {
    title: "Session the third",
    date: "November 10",
    notes: "The party met Strahd for the first time. He was spooky as all heck.",
    campaign_id: 1
  },
  {
    title: "Many Meetings",
    date: "First of Lamas",
    notes: "We met in the Dancing Crow tavern. An old wizard told us of the evil goings on with the giants in the next town over.",
    campaign_id: 2
  },
  {
    title: "A Quest Most Dire",
    date: "Second of Lamas",
    notes: "We ventured forth to confront the closest giant tribe. They were not happy to see us and we had to fight one of them to the death in combat.",
    campaign_id: 2
  }
]

SESSIONS.each do |s|
  session = Session.find_or_initialize_by(title: s[:title])
  session.assign_attributes(s)
  session.save!
end


LOOTS = [
  {
    gold: 3476,
    inventory: "Breastplate, 2 gold candelabras, bag of pearls",
    campaign_id: 1
  },
  {
    gold: 4721,
    inventory: "Longsword +2, bag of holding, ioun stone x3, severed hand, small stone, gold necklace (400gp)",
    campaign_id: 2
  },
  {
    gold: 243,
    inventory: "An empty sack, some teeth",
    campaign_id: 3
  }
]

LOOTS.each do |l|
  loot = Loot.find_or_initialize_by(campaign_id: l[:campaign_id])
  loot.assign_attributes(l)
  loot.save!
end


QUESTS = [
  {
    title: "Get Katriana to Vallaki safely",
    description: "We must escort Katriana to the walled town of Vallaki. Strahd is hunting for her.",
    completed: true,
    campaign_id: 1
  },
  {
    title: "Make contact with the Keepers of the Feather at the Blue Water Inn in Vallaki",
    description: "The Keppers of the feather are a family of wereravens who spy on Strahd. They may be able to help us, but they are very secretive.",
    campaign_id: 1
  },
  {
    title: "Explore Argynvosthold",
    campaign_id: 1
  },
  {
    title: "Go to the next town and find out the name of the giant who attacked it",
    campaign_id: 2
  },
  {
    title: "Set up defences for the town of Kyre",
    description: "The giants might attack the town again. We need to find some way to fortify it.",
    campaign_id: 2
  },
]

QUESTS.each do |l|
  quest = Quest.find_or_initialize_by(title: l[:title])
  quest.assign_attributes(l)
  quest.save!
end


USERS = [
  {
    email: "demo@test.com",
    password: "password",
  },
]

USERS.each do |user|
  user = User.find_or_initialize_by(email: l[:email])
  user.assign_attributes(user)
  user.save!
end


CHARACTER = [
  {
    campaign_id: 1,
    user_id: 1,
    char_name: "Uriah Heep",
    char_class: "Wizard"
  },
]

CHARACTER.each do |char|
  char = Character.find_or_initialize_by(char_name: l[:char_name])
  char.assign_attributes(char)
  char.save!
end
