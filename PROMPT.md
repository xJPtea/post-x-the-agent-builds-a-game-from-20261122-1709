# The one prompt

The whole game — and the whole video — starts from this single prompt,
typed to the agent exactly as written here:

> Build me a tiny browser game: a neon catch-the-stars arcade game in one
> HTML file. Arrow keys or mouse to move the paddle, falling stars to
> catch, bombs to dodge, score, 3 lives, game over and restart. Make it
> fast, fun and pretty.

## What came out of it

- `game.html` — Star Catcher, one self-contained HTML file. Canvas game,
  no assets, no network. Mouse or arrow keys move the paddle; gold stars
  are worth +10, red bombs cost a life; 3 lives, then game over, restart
  with R or a click.
- The video shows the prompt being typed, the agent writing and
  self-testing `game.html`, then the finished game running on autoplay
  (`?autoplay=1`, seed 15): 17 stars caught, 3 bombs hit, final score 170,
  game over at 18.5 s into the clip.
- The autoplay run is deterministic: the same seed replays the same game.
  The video's gameplay frames were rendered from the game's own rules and
  constants (same spawn timing, same fall speeds, same paddle AI), because
  no headless browser exists on the build machine to screen-capture it —
  the shipped `game.html` is the real, playable game.
