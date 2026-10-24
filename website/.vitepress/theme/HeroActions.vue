<script setup lang="ts">
// The home page's buttons. Written here rather than in the page's front matter so the download address comes from
// the constants.
import { VPButton } from "vitepress/theme";
import { STABLE_URL, WINDOWS_STABLE_URL } from "../constants";
</script>

<template>
  <div class="hero-actions">
    <VPButton tag="a" size="big" theme="brand" text="Download for Windows" :href="WINDOWS_STABLE_URL" />
    <VPButton tag="a" size="big" theme="brand" text="Download for Linux" :href="STABLE_URL" />
    <VPButton tag="a" size="big" theme="alt" text="Getting started" href="/getting-started" />
  </div>
  <p class="hero-note">
    Windows 10 and 11: installer, 64-bit. Linux: AppImage, x86-64, Ubuntu 24.04 or newer.
    <a href="/download">Other downloads</a>
  </p>
</template>

<style scoped>
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 24px;
}
.hero-note {
  margin-top: 12px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.hero-note a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
}
@media (max-width: 959px) {
  .hero-actions {
    justify-content: center;
  }
  .hero-note {
    text-align: center;
  }
}
</style>
