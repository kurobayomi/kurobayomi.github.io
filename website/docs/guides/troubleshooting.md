<script setup>
import { ISSUES } from "../../.vitepress/constants";
</script>

# Troubleshooting

Fixes for the most common problems. If yours is not here, see [Report a bug](#report-a-bug).

## The AppImage does not start

- **Nothing happens on double-click:** the file is not allowed to run yet. See [Run it](/download#run-it).
- **An error about glibc or `GLIBC_2.39`:** your system is too old. Kurobayomi needs Ubuntu 24.04, Fedora 40, Debian
  13 or newer.
- **An error about FUSE:** install your system's `libfuse2` package (on Ubuntu 24.04: `libfuse2t64`), or start it with
  `./Kurobayomi-x86_64.AppImage --appimage-extract-and-run`.

## Windows warns about the installer

The installer is not signed, so Windows SmartScreen may say it protected your PC. Click **More info**, then **Run
anyway**. Only run an installer you downloaded from the [Download](/download#windows) page.

## Browse is empty

Kurobayomi has no sources until you add a repository and turn its sources on. See
[Add a repository](/getting-started#_2-add-a-repository) and
[Why is Browse empty?](/docs/faq/browse#why-is-browse-empty-after-adding-a-repository).

## A source does not work

A source stops working when its website changes. Kurobayomi then shows a short message with a **Retry** button.

1. Click **Retry**, or try again later.
2. Repositories are checked for fixes every day, so a source that fails today often works again after the next update.
3. Click **Check now** on the source to see its status.

A source that keeps failing shows **Not working right now** in Browse. Report it to the people who publish the
repository, not to Kurobayomi.

## Cloudflare checks

Some sites put a Cloudflare check ("Checking your browser") in front of their pages.

- **On Linux** Kurobayomi passes the check by itself in a hidden page, which needs WebKitGTK. The AppImage brings it.
- **On Windows** this is not done yet, so sources behind Cloudflare may not work.

If a source keeps failing the check, clear its data and try again: **Settings → Sources and tracking → Networking →
Clear cookies**, then **Clear WebView data**. When **Check now** says the source is blocked from your connection, the
site refuses your network; a VPN or another connection may help.

## Library update errors

When a library update cannot update some titles, a notice says "N update(s) failed". Click it to open the error log: a
text file that groups the errors by message, then by source, then by title. It is replaced at the next update.

Common messages:

| Message | What to do |
| --- | --- |
| HTTP error 403 or 503 | The site blocked the request, often a [Cloudflare check](#cloudflare-checks). Wait, or clear cookies. |
| HTTP error 404 | The title moved or was removed on the site. [Migrate](/docs/guides/source-migration) it to another source. |
| HTTP error 429 | Too many requests. Update fewer titles at once; see [large updates](/docs/faq/library#large-updates). |
| Timeout or connection error | Check your internet connection and try again later. |
| The source is not installed or is off | Turn the source on, or migrate the title. |

## A video does not play

1. Pick another **Server** or **Quality**: right-click the video.
2. Click **Retry**, or try again later. Video links of some sites expire after a while.
3. Clear cookies (see [Cloudflare checks](#cloudflare-checks)).
4. If you changed `mpv.conf` (see [Player](/docs/faq/player#can-i-use-my-own-mpv-settings)), undo your change.

## The update does not arrive

Kurobayomi checks for a new version at start, unless you turned that off in **Settings → About** or you are on a metered
connection. **Check for updates** in **About** checks now.

- **Linux:** an AppImage in a folder you cannot write to (a system folder) cannot replace itself. Move it to your home
  folder.
- **Windows:** the new version installs when you quit Kurobayomi. Quit it, or press **Restart** in the message.

## Where are my downloads?

See [Where are my downloads?](/docs/faq/downloads#where-are-my-downloads)

## Report a bug

Open an issue on <a :href="ISSUES">GitHub</a>. Say:

- what you did, what you expected and what happened,
- your version (in **Settings → About**) and your system (for example "Windows 11" or "Fedora 41"),
- the source, if the problem is with one.

**Report an issue** in **Settings → About** opens the same page. Leave out links to copyrighted content.
