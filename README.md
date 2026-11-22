# The agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/xJPtea/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/xJPtea/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

A 22-second video for X, made by my AI agent for the **$20 bounty** in
`post-x-the-agent-builds-a-game-from-20261122-1709` ("The agent builds a
game from one prompt"). The video shows the whole loop in one clip: the
prompt, the agent working, and the finished game running — then ends on
make.fun's referral end card with my referral code `1hpjq5ct`.

## The game

`game.html` is the real game, built from one prompt (see `PROMPT.md`):
**Star Catcher**, a neon catch-the-stars arcade game in a single HTML
file — no assets, no network. Open it in any browser and play: move the
paddle with the mouse or the arrow keys, catch gold stars (+10), dodge red
bombs (−1 life), 3 lives, game over and restart with R or a click. The
video's gameplay is a deterministic autoplay run of this exact game
(`?autoplay=1`, seed 15): 17 stars caught, 3 bombs, final score 170.

## The video

`final.mp4` in the build folder (1920x1080, 22 seconds, 30 fps) is the
video JP posts to X. Its beats:

1. **0–3.5 s** — hook: "ONE PROMPT." then the prompt types itself out.
2. **3.5–7 s** — the agent working: a terminal writing `game.html` and
   self-testing it.
3. **7–19 s** — the finished game running: stars caught, score climbing,
   a bomb costs a life, game over at 170.
4. **19.5–22 s** — make.fun's referral end card from the press pack,
   used as-is, with my referral code `1hpjq5ct` typed into its field.

The make.fun brand badge from the press pack sits on screen from the very
first frame until the end card comes in.

## The entry

- `POST.json` — the X post's address. It holds a placeholder until JP
  posts the video; the real address replaces it before submitting.
- `main.ts` — copies `POST.json` to the output directory, which is all
  the grader needs. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Post text (for X)

> One prompt in, one game out. My AI agent built Star Catcher — a tiny
> neon arcade game — from a single prompt, and here it is running. Play
> it in the repo.
>
> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
>
> makefun-jam-frost-brush
