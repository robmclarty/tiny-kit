# tiny-kit

A tiny collection of pure string helpers. This repo exists only to **test-drive
plumbbob + checkride from a fresh-repo experience** — it is not meant to ship.

- The definition of done is `checkride` (wired as `pnpm run check`).
- The work to do lives in [`docs/spec.md`](docs/spec.md); feed it to plumbbob with
  `/plumbbob:pb-plan docs/spec.md`.

## Helpers (built one per plumbbob step)

- `slugify(input)` — URL-safe slug.
- `truncate(input, max)` — hard cut with an ellipsis.
- barrel `src/index.ts` re-exports them.
