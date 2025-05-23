# DEX Front-end Web

[![Nx Cloud](https://img.shields.io/badge/Nx%20Cloud-enabled-brightgreen?logo=nx&logoColor=white)](https://nx.app/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Node Version](https://img.shields.io/badge/node-%3E=22.0.0-brightgreen)](https://nodejs.org/) [![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://react.dev/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.6-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![pnpm](https://img.shields.io/badge/pnpm-10.11.0-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/) [![Playwright](https://img.shields.io/badge/Playwright-1.52.0-45ba63?logo=playwright&logoColor=white)](https://playwright.dev/) [![Vitest](https://img.shields.io/badge/Vitest-3.1.3-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/) [![Storybook](https://img.shields.io/badge/Storybook-9.0.0-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

## Overview

This is the front-end web platform for DEX, built as an Nx monorepo using Next.js, Vite, Playwright, Biome, and pnpm. It includes all frontend apps, E2E tests, and shared libraries.

For detailed setup instructions, prerequisites, and development guidelines, see [DEVELOPMENT.md](./DEVELOPMENT.md).

## Quick Start

```sh
# Clone and install
git clone https://github.com/darklakefi/dex-fe-web.git
cd dex-fe-web
pnpm install
npx playwright install

# Start development
npx nx dev web
```

## Common Commands

| Task       | Command               |
| ---------- | --------------------- |
| Dev server | `npx nx dev web`      |
| Build      | `npx nx build web`    |
| Test       | `npx nx test web`     |
| Lint       | `npx nx lint web`     |
| E2E        | `npx nx e2e web-e2e`  |
| Storybook  | `npx nx storybook ui` |

## Project Structure

This is an Nx monorepo that enables:

- Project Graphs for dependency visualization
- Task Orchestration (build, test, lint, e2e)
- Code Generation via Nx plugins
- Affected Commands for efficient CI/local workflows

## Learn More

- [Nx documentation](https://nx.dev/getting-started/intro)
- [Next.js documentation](https://nextjs.org/docs)
- [Vite documentation](https://vite.dev/guide/)
- [Playwright documentation](https://playwright.dev/docs/intro)
- [Biome documentation](https://biomejs.dev/docs/)
