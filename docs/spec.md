# RFC: tiny-kit string helpers

**Status:** Draft
**Scope:** Add two pure string helpers (`slugify`, `truncate`) and expose them
from the package's public entry point.

## Summary

The library currently ships an empty barrel — `src/index.ts` exports only a
version. This proposal adds two small, well-tested string utilities and a clean
public surface, so that `import { slugify, truncate } from 'tiny-kit'` works and
the test suite (`pnpm run check`) passes.

## Motivation

`tiny-kit` has no usable functionality yet. Two common string operations —
turning arbitrary text into a URL-safe slug, and shortening a string to a fixed
length — are good first additions: each is a pure, zero-dependency function that
is easy to test in isolation and gives the package a meaningful public API.

## Goals

- Provide `slugify(input: string): string`.
- Provide `truncate(input: string, max: number): string`.
- Re-export both helpers from the package barrel while preserving `version`.
- Keep the test suite green.

## Non-goals

The following are explicitly out of scope for this proposal:

- Unicode / i18n normalization.
- Word-boundary-aware truncation.
- Configurable separators.
- A build or publish step.

## Design

### `slugify(input)`

Lowercases the input, trims surrounding whitespace, replaces each run of
non-alphanumeric characters with a single `-`, and strips any leading or
trailing `-`. ASCII-only behavior is acceptable; full Unicode handling is a
non-goal.

Example: `"  Hello, World!  "` → `"hello-world"`.

### `truncate(input, max)`

Returns `input` unchanged when `input.length <= max`. Otherwise performs a hard
character cut to `max` characters and appends a single `…`. Word-boundary logic
is intentionally excluded (see Non-goals).

Example: `truncate("hello world", 5)` → `"hello…"`.

### Module layout

Each helper lives in its own module — `src/slugify.ts` and `src/truncate.ts` —
keeping the two utilities independently testable. The barrel `src/index.ts`
re-exports both alongside the existing `version`.

## Constraints

- No new runtime dependencies; the helpers are pure and zero-dependency.
- Every helper ships with its own test file, and the test suite must stay green.
- No changes to `package.json`, `tsconfig.json`, or the check tooling.

## Implementation plan

1. Add `slugify` in `src/slugify.ts`, covered by `test/slugify.test.ts`
   (e.g. `"  Hello, World!  "` → `"hello-world"`).
2. Add `truncate` in `src/truncate.ts`, covered by `test/truncate.test.ts`
   (e.g. `truncate("hello world", 5)` → `"hello…"`).
3. Re-export both helpers from `src/index.ts` (keeping `version`), verified by
   `test/index.test.ts` importing `slugify` and `truncate` from `../src/index`.
