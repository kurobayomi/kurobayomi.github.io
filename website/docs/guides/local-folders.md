# Local folders

Kurobayomi can show your own anime and manga files next to the titles from sources. They are read from your disk, so
they work offline and need no source.

## Where to put them

There are two ways:

- **Copy them into the Local folder.** It is **Local** in your storage folder, with **Anime** and **Manga** inside. The
  Library's **⋮** menu has **Open the Local folder**.
- **Link a folder where it is.** In the Library's **⋮** menu, choose **Link an anime folder** or **Link a manga folder**
  (**Ctrl+Shift+O**). Nothing is copied.

New local titles join your library at the next library update.

## Manga

Make one folder per title. Inside it, each chapter is either a folder of images or one file:
`.cbz`, `.zip`, `.cbr`, `.rar`, `.cb7`, `.7z`, `.cbt`, `.tar` or `.epub`.

```
Local/Manga/
└── My Manga/
    ├── cover.jpg
    ├── Chapter 1.cbz
    ├── Chapter 2.cbz
    └── Chapter 3/
        ├── 001.png
        └── 002.png
```

## Anime

A folder with video files in it is one title, and each file is an episode. A folder with only subfolders holds one title
per subfolder. Videos can be `.mkv`, `.mp4`, `.webm`, `.avi`, `.mov`, `.flv` or `.wmv`.

```
Local/Anime/
└── My Anime/
    ├── cover.jpg
    ├── Episode 01.mkv
    └── Episode 02.mkv
```

Episode thumbnails are made with ffmpeg, which comes with Kurobayomi.

## Covers and details

Put these files next to a title's chapters or episodes:

| File | What it does |
| --- | --- |
| `cover.jpg` (or `.png`, `.webp`) | The cover. Without one, the first page or a frame is used. |
| `background.jpg` | The backdrop of an anime title's page. |
| `details.json` | Title, author, artist, description, genres and status. |
| `chapters.json` or `episodes.json` | Names and numbers of the chapters or episodes. |
| `ComicInfo.xml` | Manga details, as many comic tools write them. |

A `details.json` looks like this:

```json
{
  "title": "My Manga",
  "author": "Someone",
  "artist": "Someone",
  "description": "What it is about.",
  "genre": ["Action", "Comedy"],
  "status": 1
}
```

For manga, status is `0` unknown, `1` ongoing, `2` completed, `3` licensed, `4` publishing finished, `5` cancelled and `6` on
hiatus.
