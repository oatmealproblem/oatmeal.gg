---
title: "Scoop of Oatmeal, June '25"
date: "2025-06-08"
description: "Recapping the past year of StellarMaps and more"
tags:
  - stellarmaps
  - 7drl
  - scoop
---

It's past time for an update here. Going forward, I'll aim for monthly updates here about what I've been working on generally, rather than tied to any single project. This post, recapping nearly a year, is kind of a wall of text. Future posts will hopefully be more colorful with images and code snippets.

## StellarMaps

StellarMaps continues to be my main focus. I've released one non-patch release, and done lots of work on the underlying technology to lay the foundations for its future.

### v0.12: Modes, Legends, and System Maps

In September, I released v0.12 of StellarMaps. This introduced 3 major features.

* **Map Modes** color-code countries and systems according to various data and relationships. Map modes are a concept from Stellaris, and had been requested multiple times for StellarMaps. I wanted to go a step further than Stellaris, which generally only changes the colors of entire countries, so I added the population map mode which displays data solar-system level.
* **Legends** were a natural fit to release alongside map modes. There's not much point in color-coding things if you can't tell what the different colors mean. I had also noticed people often asking what the various system icons (eg capital, sector capital) meant when others shared maps online, so legends help address that too.
* **Solar System Maps** show the planets, moons, etc in a single solar system. This feature had not been requested much, but it has turned out to be quite popular with the AAR community. The development for this feature was supported by an anonymous sponsor. That's the first (hopefully not last) instance of me making some money from StellarMaps development! Note that this is not a premium feature or anything like that; it is free and open source just like the rest of StellarMaps.

### Tech Upgrades

For the upcoming v0.13, I first worked on major updates to the code libraries StellarMaps is built upon. Tauri (the desktop app framework) was upgraded from 1 to 2. Svelte (the UI framework) was upgraded from 4 to 5. And finally Skeleton (the style and component library) was upgraded from 2 to 3.

Along with the Tauri update, I've also worked on an Electron version of the app for Linux. Essentially, Electron provides a more performant and stable UI at the cost of a larger install size. Once this is released, I'll write a longer article about why and how. 

### De-Stellaris

I've received many requests from people who want to use StellarMaps to create maps for fiction, world-building, RPGs, etc, completely unrelated to Stellaris. I've begun the work to make that possible. The first step in that is to separate StellarMaps data model from the Stellaris save file format. Today, StellarMaps is a program that opens Stellaris save files. Next release, StellarMaps will have it's own concept of _projects_, which contain multiple _snapshots_ of a galaxy, that are imported from Stellaris saves. This will bring performance improvements, time-lapses, and quality-of-life for modded games. Longer term, this provides the groundwork to create projects from scratch, or potentially import from other sources (other games, real astronomical data)

## Stellaris Mod Updates

Stellaris released a massive update in May, and it took longer than usual to update my mods. With the overhaul to trade in Stellaris, I retired my mod Cross Border Trade. I also created a new mod [Intuitive Habitables Slider](https://steamcommunity.com/sharedfiles/filedetails/?id=3476554363), which replaces my Fewer Habitable Planets series of mods.

## 7DRL: 5 Letter Rogue

In March, I participated in the [7 Day Roguelike Challenge (7DRL)](https://itch.io/jam/7drl-challenge-2025), a casual and low-stakes game jam. My entry, [5 Letter Rogue](https://oatmealproblem.itch.io/5-letter-rogue) is a mashup of traditional roguelike and word game, which has the player collecting letters from enemies and then using them to type spells. My goal for the jam was to explore that concept and see if it has potential. From that perspective, it was a success, but overall I don't think it's a very good game in its current form. Now that the results are in from the judges, I want to revisit it for some minor balance and QoL updates. Longer term, I might expand upon the game, but I'll save those thoughts for a future blog post.

## Open Source Contributions

I contributed [colorized brackets to Shiki](https://shiki.style/packages/colorized-brackets) and improved support for Shiki transformers in [Expressive Code](https://expressive-code.com) (so, for example, you can use colorized brackets in Expressive Code). Both of those are now in use on this blog.
