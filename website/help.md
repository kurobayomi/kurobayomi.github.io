<script setup>
import { ISSUES } from "./.vitepress/constants";
</script>

# Help

## The AppImage does not start

- **Nothing happens on double-click:** the file is not allowed to run yet. See [Run it](/download#run-it).
- **An error about glibc or `GLIBC_2.39`:** your system is too old. Kurobayomi needs Ubuntu 24.04, Fedora 40, Debian
  13 or newer.
- **An error about FUSE:** install your system's `libfuse2` package (on Ubuntu 24.04: `libfuse2t64`), or start it with
  `./Kurobayomi-x86_64.AppImage --appimage-extract-and-run`.

## Browse is empty

Kurobayomi has no sources until you add a repository. See [Add a repository](/getting-started#_2-add-a-repository).

## A source does not work

A source stops working when its website changes. Kurobayomi then shows a short message with a **Retry** button.

1. Click **Retry**, or try again later.
2. Repositories are checked for fixes every day, so a source that fails today often works again after the next update.

A source that keeps failing shows **Not working right now** in Browse. Sources are made by the people who publish the
repository, so report a broken source to them, not to Kurobayomi.

## The update does not arrive

Kurobayomi checks for a new version at start, unless you turned that off in **About** or you are on a metered
connection. **About** has a button to check now. An AppImage in a folder you cannot write to (a system folder)
cannot replace itself; move it to your home folder.

## Where are my downloads?

In **Kurobayomi** in your home folder, unless you chose another folder in **Settings → Data and storage**. The nightly
app uses **Kurobayomi-Nightly**.

## Report a bug

Open an issue on <a :href="ISSUES">GitHub</a>. Say what you did, what you expected and what happened, and which version
you use (it is in **About**). Leave out links to copyrighted content.
