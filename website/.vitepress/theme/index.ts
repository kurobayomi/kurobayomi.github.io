import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import HeroSeal from "./HeroSeal.vue";
import HeroActions from "./HeroActions.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  // the home page's hero shows the seal instead of an image, and its buttons come from the constants
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "home-hero-image": () => h(HeroSeal),
      "home-hero-actions-after": () => h(HeroActions),
    }),
} satisfies Theme;
