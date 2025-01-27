---
title: "Reflector Monthly Update - September 2020"
date: "2020-10-04"
description: "Beyond Alpha 2"
tags:
  - reflector
---

[Alpha 2 is out!](https://oatmealproblem.itch.io/reflector) September was jam packed with playtesting and lots of usability tweaks. But you can check those out for yourself.

# What's next?

First will be at least one, potentially multiple, minor releases focused on more usability and performance. These are some of the priorities for that:

- **Full keyboard controls.** Menus, job priorities, and zoom don't have keyboard controls yet.
- **Make enemies easier to see.** Some players haven't seen enemies approaching until too late. That's not supposed to be the hard part.
- **Performance improvements.** Late game can get a little sluggish between turns. Eventually, I might rewrite in the core game code in Rust/wasm, but in the meantime there's optimizations I can make in JavaScript.
- **Revisit job assignment and priorities.** Job priorities confuses many players, but is important for managing your resources. I have a few ideas for improving this.
- **Interactive tutorial.** I've had lots of requests for this. This might get pushed into Alpha 3 instead of minor 2.x release.
- **Code cleanup.** It's time to purge bad code before embarking on another major release.

That should keep me busy for a while, especially since I'm going to slow back down to a sustainable pace. But, I have a pretty good idea of what will be in the Alpha 3.

# Alpha 3

- **More enemy diversity.** 4 new enemy types planned, but possibly more.
- **More defensive buildings.** It's only fair if the player gets some more tricks too.
- **Gameplay experiments.** I'll be trying these out, but I'll have to see how they play.
  - Place blueprints for colonists to build.
  - More varied maps. Maps with lots of lakes. Maps with lots of mountains. Etc.
  - Building deconstruction. Send colonists to deconstruct to get resources back.
  - Building rubble. Quickly rebuild destroyed buildings, or scavenge some resources.
  - Experiment with defensive building power management. Automatically turn off defensive buildings during the day. Other experiments.

I have tentative plants for Alpha 4 and 5 as well, but those will probably change by the time I get around to them. In general I'll be trying to keep each Alpha a little smaller from here on out, so releases are 3-6 months apart instead of almost a full year.
