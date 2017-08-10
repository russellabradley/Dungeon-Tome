# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

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
  }
]

CAMPAIGNS.each do |c|
  campaign = Campaign.find_or_initialize_by(title: c[:title])
  campaign.assign_attributes(c)
  campaign.save!
end


SESSIONS = [
  {
    campaign_id: Campaign.find_by(title: "Curse of Strahd").id,
    title: "Many Meetings",
    date: "First of Mirtul",
    notes: "We entered the cursed land of Barovia. A band of travellers calling themselves the Vistani lead us here. We are not sure if they are evil or not, but they seem to do the bidding of the master of this land, a man named Strah von Zarovich. Barovia is a dismal place. The people are sad, scared and hungry. The woods on the way to the town were creepy, and seemd to close in around us. Once we got to the first town, a small Village also confusingly named 'Barovia', we noticed some things seemed off. The people seemed dead inside. It's hard to tell for sure, but they seem to have no souls at all. We talked briefly to an old woman named Mary, who claimed that Strahd brainwashed and took her daughter to his castle, Ravenloft. We are not sure whether to believe her or not, but something about this Strahd fellow seems to scare everyone. Perhaps we should try to have a meeting with him and see what's what."
  },
  {
    campaign_id: Campaign.find_by(title: "Curse of Strahd").id,
    title: "A Quest Most Dire",
    date: "Second of Mirtul",
    notes: "We found refuge in a large village in the north of Barovia called Vallaki. There is aVistani camp outside the village, and the people of Vallaki seem not to trust the Vistani. Perhaps we should keep a wide berth of their camp. We met several interesting people in Vallaki, not least of which is a family called the Martikovs. Something seems strange about them. They own the only Inn in town, the Dancing Crow tavern (a strange name) and the rafters seem filled with all forms of fowl and carrion birds. Curous, but somehow they seem a trustowrthy bunch. We expolored the lake north of Vallaki, Lake Zarovich, adn learned more of this land's lord. Many here belive him to be a vampire. There is a man we heard about whom the Martikovs belive to be here. He is suppsoedly a great vampire hunter. Perhaps we should look out for him."
  }
]

SESSIONS.each do |s|
  session = Session.find_or_initialize_by(title: s[:title])
  session.assign_attributes(s)
  session.save!
end


USERS = [
  {
    email: "demo",
    password: "password",
  },
  {
    email: "will",
    password: "password",
  },
  {
    email: "jake",
    password: "password",
  }
]

USERS.each do |u|
  user = User.find_or_initialize_by(email: u[:email])
  user.assign_attributes(u)
  user.save!
end


CHARACTERS = [
  {
    campaign_id: Campaign.find_by(title: "Curse of Strahd").id,
    user_id: User.find_by(email: "demo").id,
    char_name: "Kevon",
    char_class: "Half-Orc Paladin"
  },
  {
    campaign_id: Campaign.find_by(title: "Curse of Strahd").id,
    user_id: User.find_by(email: "will").id,
    char_name: "Uriah",
    char_class: "Human Wizard"
  },
  {
    campaign_id: Campaign.find_by(title: "Curse of Strahd").id,
    user_id: User.find_by(email: "jake").id,
    char_name: "L'enard",
    char_class: "Elf Ranger"
  },
  {
    campaign_id: Campaign.find_by(title: "The Storm King's Thunder").id,
    user_id: User.find_by(email: "demo").id,
    char_name: "Aragorn",
    char_class: "Human Ranger"
  },
  {
    campaign_id: Campaign.find_by(title: "The Storm King's Thunder").id,
    user_id: User.find_by(email: "will").id,
    char_name: "Gandalf the Grey",
    char_class: "Maiar Wizard"
  }
]

CHARACTERS.each do |c|
  char = Character.find_or_initialize_by(char_name: c[:char_name])
  char.assign_attributes(c)
  char.save!
end


# LOOTS = [
#   {
#     gold: 3476,
#     inventory: "Breastplate, 2 gold candelabras, bag of pearls",
#     campaign_id: Campaign.find_by(title: "Curse of Strahd").id
#   },
#   {
#     gold: 4721,
#     inventory: "Longsword +2, bag of holding, ioun stone x3, severed hand, small stone, gold necklace (400gp)",
#     campaign_id: Campaign.find_by(title: "The Storm King's Thunder").id
#   }
# ]
#
# LOOTS.each do |l|
#   loot = Loot.find_or_initialize_by(campaign_id: l[:campaign_id])
#   loot.assign_attributes(l)
#   loot.save!
# end
#
#
# QUESTS = [
#   {
#     title: "Get Katriana to Vallaki safely",
#     description: "We must escort Katriana to the walled town of Vallaki. Strahd is hunting for her.",
#     completed: true,
#     campaign_id: Campaign.find_by(title: "Curse of Strahd").id
#   },
#   {
#     title: "Make contact with the Keepers of the Feather at the Blue Water Inn in Vallaki",
#     description: "The Keppers of the feather are a family of wereravens who spy on Strahd. They may be able to help us, but they are very secretive.",
#     campaign_id: Campaign.find_by(title: "Curse of Strahd").id
#   },
#   {
#     title: "Explore Argynvosthold",
#     campaign_id: Campaign.find_by(title: "Curse of Strahd").id
#   },
#   {
#     title: "Go to the next town and find out the name of the giant who attacked it",
#     campaign_id: Campaign.find_by(title: "The Storm King's Thunder").id
#   },
#   {
#     title: "Set up defences for the town of Kyre",
#     description: "The giants might attack the town again. We need to find some way to fortify it.",
#     campaign_id: Campaign.find_by(title: "The Storm King's Thunder").id
#   },
# ]
#
# QUESTS.each do |q|
#   quest = Quest.find_or_initialize_by(title: q[:title])
#   quest.assign_attributes(q)
#   quest.save!
# end
