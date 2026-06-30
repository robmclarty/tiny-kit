<!-- checkride:begin -->

## Checkride: the definition of done

`pnpm check` is the single source of truth for "done". Exit 0 means the work is
complete; any other exit code means it is not. Never claim a task is finished while
`pnpm check` is red.

When it fails:

1. Read `.check/summary.json` to see which check failed.
2. Read that check's raw output (`.check/<slot>.json` or `.check/<slot>.stdout.txt`).
3. Fix the root cause, then re-run.

Tight feedback loops: `pnpm check --bail`, `pnpm check --only types,lint`, and
`pnpm check --changed`.

### Module boundaries

A module is a unit of encapsulation. A single file is a module; promote it to a
folder with a barrel `index.ts` when it grows internals worth hiding. A folder
module's `index.ts` is its only public surface — re-exports only, no logic. Import
siblings through `'../<sibling>/index.js'`, never their internals.

Named exports only; no classes; `.js` extensions on relative imports.

Active checks in this repo: types, lint, test, links.

<!-- checkride:end -->
