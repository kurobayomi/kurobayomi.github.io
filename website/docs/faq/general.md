# General

## What is Kurobayomi?

**Kurobayomi** is an app to watch anime and read manga on Linux and Windows. It is a desktop port of the Android app
Aniyomi: the same library, updates, history, downloads and backups, in a native window.

## Does Kurobayomi come with sources?

No. Kurobayomi hosts no content and ships with no sources. You add a **repository**, a link someone you trust gives
you, and turn on the sources you want from it. See [Getting started](/getting-started).

## Can I use Aniyomi, Mihon or Tachiyomi extensions?

No. Their extensions are Android apps and do not run on a computer, so their **Add to Aniyomi** and **Add to
Tachiyomi** buttons do nothing here. Kurobayomi needs a repository made for it. Your **backups** from those apps do
work: see [Backups](/docs/guides/backups).

## Which systems does it run on?

- **Linux:** an AppImage for 64-bit PCs, on Ubuntu 24.04, Fedora 40, Debian 13 or newer.
- **Windows:** an installer for 64-bit Windows 10 and 11.

There is no macOS, Android or iOS version. See [Download](/download).

## What is Kurobayomi Nightly?

**Kurobayomi Nightly** is built from the newest code every time it changes. It gets fixes and features first, and
bugs too. It is a separate app with its own library and folders, so it can be installed next to the stable version.

Only the stable app opens `kurobayomi://` links and `.tachibk` backup files from your file manager.

::: warning
Nightly may break. Keep **Automatic backup frequency** on (**Settings → Backup and restore**) so a bad build cannot
cost you your library.
:::

## Does it update itself?

Yes. At start it looks for a newer version, downloads it in the background and uses it after a restart. You can turn
this off with **Check for updates at startup** in **Settings → About**, or check by hand with **Check for updates**.
It does not check on a metered connection.

## What does Incognito do?

While **Incognito** is on (the switch at the bottom of the side panel), nothing you watch or read is added to
**History**, your progress is not saved and nothing is sent to your trackers. A banner shows while it is on.

## Is it free?

Yes. Kurobayomi is open source under the Apache 2.0 licence.
