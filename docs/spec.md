# Spec — tiny-kit string helpers

A throwaway spec to drive one complete plumbbob cycle. Keep every increment
small: each helper is a pure function with a couple of test cases. The check
gate is `checkride` (run as `pnpm run check`).

## Frame

- **Problem:** the library is an empty barrel (`src/index.ts` only exports a
  version). We want two small, well-tested string helpers and a clean public
  surface.
- **Smallest thing that solves it:** add `slugify` and `truncate` as separate
  pure modules, then re-export both from the barrel.
- **Done looks like:** `import { slugify, truncate } from 'tiny-kit'` works and
  `pnpm run check` (checkride) is green.
- **Explicitly NOT doing:** Unicode/i18n normalization; word-boundary-aware
  truncation; configurable separators; a build/publish step.

## Decisions

- D1: one module per helper (`src/slugify.ts`, `src/truncate.ts`) — *because*
  it keeps each step's seam tiny and independently testable.
- D2: `truncate` does a **hard** character cut and appends a single `…`
  *because* word-boundary logic is explicitly out of scope (see NOT doing).
- D3: ASCII-only behavior is fine — *because* this is a test repo, not a product.

## Constraints

- C1: no new runtime dependencies (helpers are pure, zero-dep).
- C2: every helper ships with its own test file; checkride must stay green.
- C3: don't touch `package.json`, `tsconfig.json`, or the check wiring.

## Steps

1. [ ] Add `slugify(input: string): string` — lowercases, trims, replaces runs
   of non-alphanumerics with a single `-`, and strips leading/trailing `-`.
   - **done when:** `test/slugify.test.ts` passes (e.g. `"  Hello, World!  "` → `"hello-world"`).
   - seam: `src/slugify.ts`, `test/slugify.test.ts`
2. [ ] Add `truncate(input: string, max: number): string` — returns `input`
   unchanged when `input.length <= max`, otherwise a hard cut to `max` chars
   with a trailing `…`.
   - **done when:** `test/truncate.test.ts` passes (e.g. `truncate("hello world", 5)` → `"hello…"`).
   - seam: `src/truncate.ts`, `test/truncate.test.ts`
3. [ ] Re-export both helpers from the barrel `src/index.ts` (keep `version`).
   - **done when:** `test/index.test.ts` imports `slugify` and `truncate` from
     `../src/index` and both are callable.
   - seam: `src/index.ts`, `test/index.test.ts`
