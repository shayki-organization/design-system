# design-system

`design-system` is Aurelis Digital's React component library and design tokens.

## Installation

```sh
npm install @aurelisdigital/design-system
```

## Local development

```sh
npm install
npm run storybook
npm test
```

`make test` and `make lint` wrap the same commands.

## Ownership

Maintainer: @lisa-brookdale
## Operational notes

- Secrets come from the environment, never from the repository.
- Schema changes ship as a migration in the same pull request as the code.
- Retries back off exponentially and give up after five attempts.
- Exports stream page by page; nothing is buffered in memory.
- Feature flags are read once per request, not per call.
