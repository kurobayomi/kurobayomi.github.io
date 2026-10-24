import { defineConfig } from "vitepress";
import { APP_REPO } from "./constants";

export default defineConfig({
  title: "Kurobayomi",
  description: "An anime and manga app for Linux and Windows.",
  lang: "en",
  cleanUrls: true,
  lastUpdated: false,
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Download", link: "/download" },
      { text: "Getting started", link: "/getting-started" },
      { text: "Help", link: "/help", activeMatch: "^/(help|docs/)" },
    ],
    // one sidebar for the whole help, like Mihon's docs: the questions first, then the step-by-step guides
    sidebar: {
      "/": [
        { text: "Help", link: "/help" },
        {
          text: "Frequently asked questions",
          items: [
            { text: "General", link: "/docs/faq/general" },
            { text: "Library", link: "/docs/faq/library" },
            { text: "Updates", link: "/docs/faq/updates" },
            { text: "Browse and sources", link: "/docs/faq/browse" },
            { text: "Downloads", link: "/docs/faq/downloads" },
            { text: "Player", link: "/docs/faq/player" },
            { text: "Reader", link: "/docs/faq/reader" },
            { text: "Storage and data", link: "/docs/faq/storage" },
          ],
        },
        {
          text: "Guides",
          items: [
            { text: "Getting started", link: "/getting-started" },
            { text: "Troubleshooting", link: "/docs/guides/troubleshooting" },
            { text: "Backups", link: "/docs/guides/backups" },
            { text: "Tracking", link: "/docs/guides/tracking" },
            { text: "Categories", link: "/docs/guides/categories" },
            { text: "Local folders", link: "/docs/guides/local-folders" },
            { text: "Source migration", link: "/docs/guides/source-migration" },
            { text: "Keyboard shortcuts", link: "/docs/guides/keyboard-shortcuts" },
          ],
        },
      ],
    },
    search: { provider: "local" },
    outline: { level: [2, 3], label: "On this page" },
    socialLinks: [{ icon: "github", link: APP_REPO }],
    footer: {
      message: `Kurobayomi hosts no content and ships with no sources. The <a href="${APP_REPO}">source code</a> is Apache-2.0.`,
    },
  },
});
