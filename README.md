# See Previous Ratings

This plugin adds a color-coded widget that allows you to visualize previous ratings for a specific card during Review (and it's also part of my application to RemNote as an frontend intern, assuming you guys are still hiring 🤠)

## Usage

After installing, the addon will be integrated within the flashcard review section. Each color corresponds to a rating, and is displayed in chronological order from oldest to newest.

NOTE: The addon is a port of my addon on [AnkiWeb](https://ankiweb.net/shared/info/1906641654).

## Remnote Intern Application

I remember you guys were originally hiring for a front-end intern quite a while ago. This is a a shot-in-the-dark application. I've also emailed my resume to the team.

I wanted to leave some comments, coming from experience building the occasional Anki Addon and being a die-hard user of spaced repitition:

- Firstly, I have a huge amount of respect for the team behind the Addon docs. The difference between your guide and the Anki Addon guide is night and day. Private capital really is quite beautiful. I still remember having to scoure the internet for the AnkiDroid Database Guide to figure out the schema. You guys are obviouly much more organized.

- I understand the rationele behind iframe embedding to protect the user, but it limits quite a few pseudo-class selectors. I've enabled the _trust this plugin option,_ but because everything is still embedded within a `canvas` object, many powerful CSS features are disabled. This Addon was originally designed to use a CSS popup feature to be able to display metadata about each review session when the user hovers over the widget. This is apparent [here]().

- With Anki, someone built a web inspector addon that was kind of incredible.
