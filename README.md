# kurobayomi.github.io

The website of [Kurobayomi](https://github.com/kurobayomi/kurobayomi), the anime and manga app for Linux and Windows:
<https://kurobayomi.github.io>. Built with [VitePress](https://vitepress.dev).

```sh
npm ci
npm run dev      # http://localhost:5173, reloads on save
npm run build    # the site in website/.vitepress/dist
```

- Pages are Markdown files in `website/`; the hero graphic and buttons are in `website/.vitepress/theme/`.
- Every address the site uses is in `website/.vitepress/constants.ts`.
- Screenshots are in `website/public/screenshots/`, copied from the app's `docs/images/getting-started/`.
- A push to `main` publishes the site (`.github/workflows/deploy.yml`). In the repository's settings, Pages must use
  "GitHub Actions" as its source.

Licence: Apache-2.0.
