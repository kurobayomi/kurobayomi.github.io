import { defineConfig } from "vitepress";
import { APP_REPO } from "./constants";

export default defineConfig({
  title: "Kurobayomi",
  description: "An anime and manga app for the Linux desktop.",
  lang: "en",
  cleanUrls: true,
  lastUpdated: false,
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Download", link: "/download" },
      { text: "Getting started", link: "/getting-started" },
      { text: "Help", link: "/help" },
    ],
    socialLinks: [{ icon: "github", link: APP_REPO }],
    footer: {
      message: `Kurobayomi hosts no content and ships with no sources. The <a href="${APP_REPO}">source code</a> is Apache-2.0.`,
    },
  },
});
