# NX Boilerplate

**Table of Contents**

- [🏎 Quick start](#-quick-start)
- [💻 Basic Commands](#-basic-commands)
- [📄 Documentation](#-documentation)
- [📦 Setups](#-setups)
- [Notes](#notes)
- [🪵 Changelog](#-changelog)

## 🏎 Quick start

```sh
npm install
npm run dev
```

### First time setup

This project uses environment variables for the different `apps`/`libs`.

We recommend fetching them from Vercel and then adjusting based on your project needs.

```sh
npm run vercel:env_link
npm run vercel:env_pull
```

See [Vercel docs](/docs/setup/vercel.md) for more info

## 💻 Basic Commands

#### `npm install`

Installs all dependencies.

#### `npm run web:serve`

Run `npm run web:serve` to start the Nextjs dev server. Navigate to [http://localhost:4200](http://localhost:4200)

#### `nx generate web:block`

Run `nx g web:block --name SomeName` to scaffold a new block.

#### `nx run web:generate_graphql_types:watch`

Run `nx run web:generate_graphql_types:watch` to start the graphql codegen script in watch mode.

#### `npm run storybook`

Run `npm run storybook` to start the Storybook dev server Navigate to [http://localhost:4400/](http://localhost:4400/)

#### `npm run generate`

Run `npm run generate` to update auto generated code (theme variables).

#### `npm run test`

Run `npm run test` to execute all lint, unit and e2e tests in the project.

Go to [`package.json`](package.json#scripts) to see more run scripts.

## [📄 Documentation](docs/index.md)

See more documentation in the [`./docs`](docs/index.md) directory.

## 📦 Setups

These are the available setups which can be accessed using the different branches.

| Branches       | Description                                                                                                                        |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `main`         | This is a full setup including a Nextjs Application and a Sanity Studio setup.                                                     |
| `umbraco`      | This is a setup for a Nextjs Application for use with [umbraco-boilerplate](https://github.com/NoA-Ignite-dk/umbraco-boilerplate). |
| `setup/simple` | This is a simple setup including a Nextjs Application.                                                                             |

### Using a specific setup

```sh
git checkout [branch]
```

#### Comparison Chart

| Feature                                     | `main` | `setup/simple` | `umbraco` |
| :------------------------------------------ | :----- | :------------- | :-------- |
| NX (including NX Cloud)                     | ✅     | ✅             | ✅        |
| Next.js `app`                               | ✅     | ✅             | ✅        |
| Sanity Studio `app`                         | ✅     | ❌             | ❌        |
| Theme `SCSS` `lib`                          | ✅     | ✅             | ✅        |
| UI library `SCSS` `lib`                     | ✅     | ✅             | ✅        |
| Meilisearch `lib/service`                   | ✅     | ❌             | ❌        |
| Mailchimp `lib/service`                     | ✅     | ❌             | ❌        |
| Storybook `lib/utils`                       | ✅     | ✅             | ✅        |
| Tracking `lib/service`                      | ✅     | ⚡              | ✅        |
| Testing (E2E) `lib/service`                 | ✅     | ✅             | ✅        |
| Common Utilities `lib/utils`                | ✅     | ✅             | ✅        |
| Chromatic `github/action`                   | ✅     | ✅             | ✅        |
| NX Affected [`test`, `e2e`] `github/action` | ✅     | ✅             | ✅        |
| Commitlint                                  | ✅     | ✅             | ✅        |

✅ Full support ⚡ Supported (Needs configuration) ❌ No Support

## Notes

The project is using `npm@8.1.1` to manage the monorepo and it's dependencies.

That means that each project should include the dependencies related to that project and they should not be part of the root [`package.json`](package.json).

## Conventional commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) rules.

You can either format the project using standard commit rules manually, or use the included cli tool. Run `npm run commit` or `npx git-cz` to start the cli tool.

## 🪵 Changelog

[See the full changelog here](CHANGELOG.md)
