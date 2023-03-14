# See Previous Ratings during Review

This plugin adds a color-coded widget that allows you to view at a glance the previous ratings you've given for a specific card during Review 
<i> (and it's also part of my application to RemNote as an frontend intern, assuming you guys are still open to hiring. 🤠) </i>

NOTE: The addon is a port of my addon on [AnkiWeb](https://ankiweb.net/shared/info/1906641654).
<img width="1000" alt="nice" src="https://user-images.githubusercontent.com/46613983/224896325-3af9d4c3-5331-4ebc-97bf-78d4f674f30e.png">

## Usage

After installing, the addon will be integrated within the flashcard review section. Each color corresponds to a rating, and is displayed in chronological order from oldest to newest. Check the addon settings to see what kind of rating (AGAIN, HARD, GOOD, EASY, RESET, LEECH) corresponds to what color. The color mappings can also be directly configured. 


## Remnote Frontend Intern Application

I remember you guys were originally hiring for a front-end intern quite a while ago. This is a a shot-in-the-dark application. I've also emailed my resume to the team. My Github (which contains my LinkedIn) is probably the quickest way to evaluate my experience, who I am and whether I am a fit for the team.

I also wanted to leave some comments, coming from experience building the occasional Anki Addon and being a die-hard user of Anki:

- Firstly, I have a huge amount of respect for the team behind the RemNote Addon docs. The difference between your guide and the Anki Addon guide is night and day. Private capital really is quite beautiful. I still remember having to scour the internet for the **Android** Anki Database Guide to figure out the **Desktop** schema. The work that the RemNote team is doing is a huge breath of fresh air.

- I understand the rationele behind iframe embedding to protect the user from malicious plugins, but it limits quite a few CSS features. I've enabled the _trust this plugin option,_ but because everything is still embedded within a `canvas` object, one of the features that is commonly used by Anki addons - pseudo-class selectors - can no longer be used. This Addon was originally designed to use a CSS popup feature to be able to display metadata about each review session when the user hovers over the widget. (shown in the first thumnail [here](https://ankiweb.net/shared/info/31746032))

- I noticed many parallels between the Anki Addon system and the RemNotes which I admire. However, one notable feature from Anki that I don't see is a button to reset to default addon settings. It would be quite useful, especially because this addon gives the user the ability to to change the color associated with each card's rating.

- With Anki, someone built a [web inspector addon](https://ankiweb.net/shared/info/31746032). It was incredibly useful for addon dev. I don't know much about RemNote's internal tech stack, but it would be quite powerful to be able to relegate a "webview" of sorts such that while propertiary code is kept hidden, plugin devs would be able to debug their work. I'm not sure if this was because I wasn't using a popup widget or something, but I wasn't able to view the source for my plugin while building it.

Altogether, it would be a dream come true to work with the RemNote team. I really don't care about pay. I just want experience with a talented team. My email is j448zhou@uwaterloo.ca if the anyone on the team was interested in hoping on a call.
