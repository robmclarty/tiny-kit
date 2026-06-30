# tiny-kit

A tiny collection of pure string helpers, wired up so you can **test-drive
plumbbob + [checkride](https://www.npmjs.com/package/checkride) from a
fresh-repo experience**. Clone it, run the check gate, and walk one full
plumbbob planning/execution cycle against a spec small enough to finish in
minutes.

The string helpers themselves aren't the point — they're just a realistic,
zero-dependency surface to plan and build against.

## Getting started

Requires [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io). Clone or
download this repo, then:

```bash
pnpm install
pnpm check   # the definition of done — should print a green summary
```

`pnpm check` runs [checkride](https://www.npmjs.com/package/checkride), the
single source of truth for "done": exit 0 means the work is complete. See
[AGENTS.md](./AGENTS.md) for the full contract.

## Try a plumbbob cycle

The work to do lives in [`docs/spec.md`](docs/spec.md). Feed it to plumbbob
(the Claude Code plugin) to plan and build it one small step at a time:

```
/plumbbob:pb-plan docs/spec.md
```

Each step lands one helper, with its own test, keeping `pnpm check` green:

- `slugify(input)` — URL-safe slug.
- `truncate(input, max)` — hard cut with an ellipsis.
- barrel `src/index.ts` re-exports them.

## License

[MIT](./LICENSE) © Rob McLarty
