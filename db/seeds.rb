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
  # {
  #   title: "Princes of the Apocalypse",
  #   tagline: "Abolish an ancient evil threatening devastation in the land of Faerun!",
  #   description: "Called by the Elder Elemental Eye to serve, four corrupt prophets have risen from the depths of anonymity to claim mighty weapons with direct links to the power of the elemental princes. Each of these prophets has assembled a cadre of cultists and creatures to serve them in the construction of four elemental temples of lethal design. It is up to adventurers from heroic factions such as the Emerald Enclave and the Order of the Gauntlet to discover where the true power of each prophet lay, and dismantle it before it comes boiling up to obliterate the Realms."
  # }
]

CAMPAIGNS.each do |c|
  campaign = Campaign.find_or_initialize_by(title: c[:title])
  campaign.assign_attributes(c)
  campaign.save!
end


SESSIONS = [
  # {
  #   title: "A Long-Expected Party",
  #   date: "August the thirtieth",
  #   notes: "When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton. Bilbo was very rich and very peculiar, and had been the wonder of the Shire for sixty years, ever since his remarkable disappearance and unexpected return. The riches he had brought back from his travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with treasure. And if that was not enough for fame, there was also his prolonged vigour to marvel at. Time wore on, but it seemed to have little effect on Mr. Baggins. At ninety he was much the same as at fifty. At ninety-nine they began to call him well-preserved; but unchanged would have been nearer the mark. There were some that shook their heads and thought this was too much of a good thing; it seemed unfair that anyone should possess (apparently) perpetual youth as well as (reputedly) inexhaustible wealth.",
  #   campaign_id: 1
  # },
  # {
  #   title: "The Shadow of the Past",
  #   date: "September the third",
  #   notes: "The talk did not die down in nine or even ninety-nine days. The second disappearance of Mr. Bilbo Baggins was discussed in Hobbiton, and indeed all over the Shire, for a year and a day, and was remembered much longer than that. It became a fireside-story for young hobbits; and eventually Mad Baggins, who used to vanish with a bang and a flash and reappear with bags of jewels and gold, became a favourite character of legend and lived on long after all the true events were forgotten. But in the meantime, the general opinion in the neighbourhood was that Bilbo, who had always been rather cracked, had at last gone quite mad, and had run off into the Blue. There he had undoubtedly fallen into a pool or a river and come to a tragic, but hardly an untimely, end. The blame was mostly laid on Gandalf. ‘If only that dratted wizard will leave young Frodo alone, perhaps he’ll settle down and grow some hobbit-sense,’ they said. And to all appearance the wizard did leave Frodo alone, and he did settle down, but the growth of hobbit-sense was not very noticeable. Indeed, he at once began to carry on Bilbo’s reputation for oddity. He refused to go into mourning; and the next year he gave a party in honour of Bilbo’s hundred-and-twelfth birthday, which he called a Hundred-weight Feast. But that was short of the mark, for twenty guests were invited and there were several meals at which it snowed food and rained drink, as hobbits say.",
  #   campaign_id: 1
  # },
  # {
  #   title: "Three is Company",
  #   date: "September the twentieth",
  #   notes: "To tell the truth, he was very reluctant to start, now that it had come to the point: Bag End seemed a more desirable residence than it had for years, and he wanted to savour as much as he could of his last summer in the Shire. When autumn came, he knew that part at least of his heart would think more kindly of journeying, as it always did at that season. He had indeed privately made up his mind to leave on his fiftieth birthday: Bilbo’s one hundred and twenty-eighth. It seemed somehow the proper day on which to set out and follow him. Following Bilbo was uppermost in his mind, and the one thing that made the thought of leaving bearable. He thought as little as possible about the Ring, and where it might lead him in the end. But he did not tell all his thoughts to Gandalf. What the wizard guessed was always difficult to tell. He looked at Frodo and smiled. ‘Very well,’ he said. ‘I think that will do – but it must not be any later. I am getting very anxious. In the meanwhile, do take care, and don’t let out any hint of where you are going! And see that Sam Gamgee does not talk. If he does, I really shall turn him into a toad.’",
  #   campaign_id: 1
  # },
  {
    campaign_id: 1,
    title: "Many Meetings",
    date: "First of Mirtul",
    notes: "We entered the cursed land of Barovia. A band of travellers calling themselves the Vistani lead us here. We are not sure if they are evil or not, but they seem to do the bidding of the master of this land, a man named Strah von Zarovich. Barovia is a dismal place. The people are sad, scared and hungry. The woods on the way to the town were creepy, and seemd to close in around us. Once we got to the first town, a small Village also confusingly named 'Barovia', we noticed some things seemed off. The people seemed dead inside. It's hard to tell for sure, but they seem to have no souls at all. We talked briefly to an old woman named Mary, who claimed that Strahd brainwashed and took her daughter to his castle, Ravenloft. We are not sure whether to believe her or not, but something about this Strahd fellow seems to scare everyone. Perhaps we should try to have a meeting with him and see what's what."
  },
  {
    campaign_id: 1,
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
    campaign_id: 1,
    user_id: 1,
    char_name: "Kevon",
    char_class: "Half-Orc Paladin"
  },
  {
    campaign_id: 1,
    user_id: 2,
    char_name: "Uriah",
    char_class: "Human Wizard"
  },
  {
    campaign_id: 1,
    user_id: 3,
    char_name: "L'enard",
    char_class: "Elf Ranger"
  },
  {
    campaign_id: 2,
    user_id: 1,
    char_name: "Aragorn",
    char_class: "Human Ranger"
  },
  {
    campaign_id: 2,
    user_id: 2,
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
#     campaign_id: 1
#   },
#   {
#     gold: 4721,
#     inventory: "Longsword +2, bag of holding, ioun stone x3, severed hand, small stone, gold necklace (400gp)",
#     campaign_id: 2
#   },
#   {
#     gold: 243,
#     inventory: "An empty sack, some teeth",
#     campaign_id: 3
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
#     campaign_id: 1
#   },
#   {
#     title: "Make contact with the Keepers of the Feather at the Blue Water Inn in Vallaki",
#     description: "The Keppers of the feather are a family of wereravens who spy on Strahd. They may be able to help us, but they are very secretive.",
#     campaign_id: 1
#   },
#   {
#     title: "Explore Argynvosthold",
#     campaign_id: 1
#   },
#   {
#     title: "Go to the next town and find out the name of the giant who attacked it",
#     campaign_id: 2
#   },
#   {
#     title: "Set up defences for the town of Kyre",
#     description: "The giants might attack the town again. We need to find some way to fortify it.",
#     campaign_id: 2
#   },
# ]
#
# QUESTS.each do |q|
#   quest = Quest.find_or_initialize_by(title: q[:title])
#   quest.assign_attributes(q)
#   quest.save!
# end
