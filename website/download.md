<script setup>
import { STABLE_URL, NIGHTLY_URL, WINDOWS_STABLE_URL, WINDOWS_NIGHTLY_URL, RELEASES } from "./.vitepress/constants";
</script>

# Download

Kurobayomi runs on **Windows** 10 and 11, as an installer, and on **Linux**, as an **AppImage**: one file that runs on
most Linux systems without installing anything. Both are built for 64-bit PCs (x86-64).

## Stable or nightly?

**Stable** is the one to use. It gets a new version when a release is ready.

**Nightly** is built from every change, so it has new things first and may also have new bugs. It is a separate app:
it has its own name (Kurobayomi Nightly), a gold icon and its own data, so it never touches your stable library. You
can have both.

Older versions and the release notes are on the <a :href="RELEASES">releases page</a>.

## Windows

<p>
  <a class="dl" :href="WINDOWS_STABLE_URL">Download stable</a>
  <a class="dl alt" :href="WINDOWS_NIGHTLY_URL">Download nightly</a>
</p>

Run the downloaded installer. It installs Kurobayomi for your user account, without asking for administrator rights,
and adds it to the Start menu.

The installer is not signed, so Windows SmartScreen may warn about it the first time: click **More info**, then **Run
anyway**. To remove Kurobayomi, use **Settings → Apps** in Windows.

## Linux

<p>
  <a class="dl" :href="STABLE_URL">Download stable</a>
  <a class="dl alt" :href="NIGHTLY_URL">Download nightly</a>
</p>

### Run it

The downloaded file must be allowed to run once:

- **In a terminal:** `chmod +x Kurobayomi-x86_64.AppImage`, then `./Kurobayomi-x86_64.AppImage`.
- **In a file manager:** right-click the file, open **Properties**, turn on **Allow executing file as program** (or
  **Executable as Program**), then double-click it.

AppImage managers such as Gear Lever or AppImageLauncher can add it to your app menu.

## Updates

Both versions update themselves, on Windows and on Linux. At start, Kurobayomi looks for a newer version, downloads it
in the background and checks it; a message with a **Restart** button tells you when it is ready. On Windows the new
version installs when you quit Kurobayomi, or right away when you press **Restart**. Stable moves to the next release,
nightly to the latest build. It skips the check on a metered connection (a phone hotspot). **About**, at the bottom of
the sidebar, shows the progress and turns the check off.

## Requirements

- **Windows:** Windows 10 or 11, 64-bit.
- **Linux:** glibc 2.39 or newer: **Ubuntu 24.04**, Fedora 40, Debian 13, Arch, or newer. Everything else is inside the
  AppImage. A Flatpak is planned.

Both come with ffmpeg, which anime downloads use, so there is nothing else to install.

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
.dl + .dl {
  margin-left: 12px;
}
</style>
