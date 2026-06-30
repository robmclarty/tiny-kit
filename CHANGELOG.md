# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.4] - 2026-06-30

- **Added:** Wired up Biome 2.2.4 as the project's linter through checkride's `lint` check, with a `biome.json` config. Added a custom checkride `format` slot that runs `biome format --write` to auto-fix formatting as part of `pnpm check`, demonstrating how a config entry keyed by a non-catalogue name becomes a custom check.
- **Changed:** Narrowed the biome `lint` slot from `biome check` to `biome lint` so linting and formatting no longer overlap, leaving the new `format` slot as the sole owner of formatting. Bumped checkride to 0.1.6 and set `"order": "first"` on the `format` slot so it normalizes the tree ahead of the built-in checks instead of trailing them.

## [0.0.3] - 2026-06-30

- **Added:** A `.nvmrc` file pinning the project to Node 22 so `nvm` and `fnm` users land on a consistent runtime.
- **Changed:** Updated the README to link the first "plumbbob" mention to its repository and to point both checkride links at the checkride GitHub source rather than the npm registry listing.
- **Removed:** The `.plumbbob/` working directory is now ignored by git so its transient artifacts stay out of version control.

## [0.0.2] - 2026-06-30

- **Added:** A project-level `/version` skill that bumps the `package.json` version according to semver and maintains `CHANGELOG.md` in Keep a Changelog format, sourcing each entry's bullets from the commit history since the last release.

## [0.0.1] - 2026-06-30

- **Added:** Initial scaffold of the tiny-kit sandbox repository for test-driving plumbbob and checkride, including the test tooling configuration. Added an MIT `LICENSE` file (© Rob McLarty) along with license and author metadata in `package.json` so the repository is fully open for reuse.
- **Changed:** Reframed the README from a private throwaway into a welcoming public starter, adding getting-started and plumbbob-cycle sections while keeping `private: true` so the sandbox cannot be accidentally published to npm.
