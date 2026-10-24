# Player

## How do I change quality, server, subtitles or audio?

Right-click the video. The menu has **Audio**, **Subtitles**, **Quality**, **Server**, **Speed** and **Fullscreen**.
The control bar also has quality, speed and chapter menus, and **Previous episode** and **Next episode**.

## How do I set my preferred quality and languages?

In **Settings → Player**:

- **Subtitle language** and **Audio language**: picked first when an episode has them.
- **Default quality**: 2160p, 1080p, 720p, 480p or 360p. When an episode has no server with it, the best quality
  plays. Anime downloads use it too.
- **Default volume**: a fixed level or the last one you used.
- **Autoplay next episode** and **Hide the bars automatically**.

A quality or server you pick while watching is kept for the next episodes until you close the app.

## How does Skip Opening work?

A **Skip Opening** or **Skip Ending** button appears when the video has chapters named after them, or when AniSkip knows
the times of that episode. AniSkip finds the episode through its MyAnimeList entry. If the button skips too little or
too much, use **Change intro length** in the title's **⋮** menu.

## How do I leave full screen?

Press **Esc** or **F**, or double-click the video. Full screen shows only the video; move the mouse to see the controls.

## Can I use my own mpv settings?

Yes. The player is mpv. Kurobayomi creates `mpv.conf` and `input.conf` once and never overwrites them:

- **Linux:** `~/.local/share/kurobayomi/mpv/`
- **Windows:** `%APPDATA%\kurobayomi\data\mpv\`

The nightly app uses `kurobayomi-nightly` instead of `kurobayomi`. Restart the player after editing them. There is no
editor for them in the app.

## The video does not play

See [A video does not play](/docs/guides/troubleshooting#a-video-does-not-play).
