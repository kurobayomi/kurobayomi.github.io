<script setup>
import { STABLE_URL, NIGHTLY_URL, RELEASES } from "./.vitepress/constants";
</script>

# Download

Kurobayomi comes as an **AppImage**: one file that runs on most Linux systems without installing anything. It is
built for 64-bit PCs (x86-64).

## Stable or nightly?

**Stable** is the one to use. It gets a new version when a release is ready.

<p><a class="dl" :href="STABLE_URL">Download stable</a></p>

**Nightly** is built from every change, so it has new things first and may also have new bugs. It is a separate app:
it has its own name (Kurobayomi Nightly), a gold icon and its own data, so it never touches your stable library. You
can have both.

<p><a class="dl alt" :href="NIGHTLY_URL">Download nightly</a></p>

Older versions and the release notes are on the <a :href="RELEASES">releases page</a>.

## Run it

The downloaded file must be allowed to run once:

- **In a terminal:** `chmod +x Kurobayomi-x86_64.AppImage`, then `./Kurobayomi-x86_64.AppImage`.
- **In a file manager:** right-click the file, open **Properties**, turn on **Allow executing file as program** (or
  **Executable as Program**), then double-click it.

AppImage managers such as Gear Lever or AppImageLauncher can add it to your app menu.

## Updates

Both versions update themselves. At start, Kurobayomi looks for a newer version, downloads it in the background and
checks it; a message with a **Restart** button tells you when it is ready. Stable moves to the next release, nightly to
the latest build. It skips the check on a metered connection (a phone hotspot). **About**, at the bottom of the
sidebar, shows the progress and turns the check off.

## Requirements

- glibc 2.39 or newer: **Ubuntu 24.04**, Fedora 40, Debian 13, Arch, or newer.
- A 64-bit (x86-64) PC.

Everything else is inside the AppImage. A Flatpak is planned.

<style scoped>
.dl {
  display: inline-block;
  padding: 0 20px;
  line-height: 44px;
  border-radius: 22px;
  font-weight: 600;
  text-decoration: none !important;
  color: var(--vp-button-brand-text) !important;
  background: var(--vp-button-brand-bg);
  border: 1px solid var(--vp-button-brand-border);
}
.dl:hover {
  background: var(--vp-button-brand-hover-bg);
}
.dl.alt {
  color: var(--vp-button-alt-text) !important;
  background: var(--vp-button-alt-bg);
  border-color: var(--vp-button-alt-border);
}
.dl.alt:hover {
  background: var(--vp-button-alt-hover-bg);
}
</style>
