# Laws of UX

A skill that drops 30 solid UX principles into any AI coding agent, so it can
design and critique interfaces with actual reasoning instead of vibes.

I kept reaching for the same handful of ideas — Hick's Law when a screen had too
many buttons, Jakob's Law when something felt unfamiliar, Fitts's Law when a tap
target was too small — and I got tired of re-explaining them every time. So I
packed all thirty into a skill the agent can pull up on its own.

Each principle comes with the mechanism behind it, concrete ways to apply it, the
pitfalls, and a real example. Nothing academic — just the version you'd actually
use while shipping.

## What's in here

```
uxlaws/
├── .claude-plugin/
│   ├── plugin.json         # plugin manifest
│   └── marketplace.json    # makes the repo installable in one command
├── skills/laws-of-ux/
│   ├── SKILL.md            # the skill: a UX-pass workflow, symptom → principle index, quick combos
│   └── reference/laws.md   # the full catalog — mechanism, how-to-apply, pitfalls, examples
├── README.md
└── LICENSE
```

`SKILL.md` stays short so it barely costs any context. The heavy catalog in
`reference/laws.md` only gets pulled in when a principle is actually needed.

## Getting it running

### One command (recommended)

```
/plugin marketplace add ali-kk/uxlaws
/plugin install laws-of-ux@uxlaws
```

Start a fresh session. It kicks in on its own when you're working on UI, or you
can call it directly with `/laws-of-ux`.

### Manual (drop the folder in)

```bash
git clone https://github.com/ali-kk/uxlaws
cp -r uxlaws/skills/laws-of-ux ~/.claude/skills/laws-of-ux
```

### Any other agent

The skill is just `skills/laws-of-ux/` — a `SKILL.md` and some Markdown, no
code, no dependencies. Point your agent's system prompt at that `SKILL.md` and
let it open `reference/laws.md` when it needs the detail. For a hosted app, zip
the `laws-of-ux` folder and upload it under your skills settings.

## The thirty

Proximity · Common Region · Similarity · Uniform Connectedness · Prägnanz · Von
Restorff · Selective Attention · Aesthetic-Usability · Miller's Law · Working
Memory · Chunking · Serial Position · Cognitive Load · Zeigarnik · Peak-End ·
Hick's Law · Choice Overload · Cognitive Bias · Occam's Razor · Pareto · Fitts's
Law · Doherty Threshold · Flow · Goal-Gradient · Parkinson's Law · Jakob's Law ·
Mental Model · Paradox of the Active User · Postel's Law · Tesler's Law

## License

MIT — do what you like with it. See [LICENSE](LICENSE).
