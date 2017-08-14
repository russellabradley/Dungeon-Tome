# Dungeon Tome

This is a companion web app to used alongside tabletop roleplaying games (like Dungeons & Dragons). Users can join with the other members of their gaming groups and track their campaigns, quests and characters.

Dungeon Tome has a Ruby on Rails backend with a PostgreSQL database.

The front end is React running with webpacker and React Router v4.

![DungeonTome](campaign_image.png)

## Ruby version
2.3.4

## Live Demo
[Dungeon Tome](https://www.dunegon-tome.herokuapp.com/)

## ER Diagram

![ER](er_diagram.png)

## Get Started

```bash
$ cd dungeon-tome
$ bundle            # install dependencies
$ rake db:create    # initialize the database
$ rake db:migrate   # run migrations
$ rake              # run the test suite
```

## Usage

In one terminal window:

```bash
$ rake db:seed      # (optional) seed the database with example data
$ rails s           # start the rails server
```

In a separate terminal window:

```bash
$ ./bin/webpack-dev-server    # start webpack server
```

Visit https://localhost:3000/ in your web browser.

## TODO

* Make sessions editable and deletable by anyone in a campaign
* Add additional information for characters
* Add a loot tracking system for campaigns
* Add Dungeon Master functionality (admin for a campaign)
