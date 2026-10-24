# Storage and data

## Where does Kurobayomi keep my files?

Your downloads, backups and local folders live in one **storage folder**: **Kurobayomi** in your home folder (your user
folder on Windows). It holds **Anime**, **Manga**, **Backups** and **Local**.

The app's own data (the library database, settings, cache and logs) lives in the usual place of your system:

| | Linux | Windows |
| --- | --- | --- |
| Library and data | `~/.local/share/kurobayomi` | `%APPDATA%\kurobayomi\data` |
| Settings | `~/.config/kurobayomi` | `%APPDATA%\kurobayomi\config` |
| Cache | `~/.cache/kurobayomi` | `%LOCALAPPDATA%\kurobayomi\cache` |
| Logs | `~/.local/state/kurobayomi` | `%LOCALAPPDATA%\kurobayomi\data\logs` |

The nightly app uses `kurobayomi-nightly` and **Kurobayomi-Nightly** instead.

## How do I move my downloads to another drive?

Open **Settings → Backup and restore** and click **Storage location**. New downloads, backups and local folders go to
the new folder after a restart. Files already downloaded stay where they are; move them yourself if you want them in
the new place.

## The app uses a lot of space

- **Clear cache** in **Settings → Backup and restore → Storage usage** removes cached covers and pages. **Cache size
  limit** keeps it small.
- **After reading/watching automatically delete** in **Settings → Downloads and storage** removes downloads you
  finished.

## Downloads I deleted by hand still show as downloaded

Click **Reindex downloads** in **Settings → Backup and restore → Maintenance**.

## Covers are wrong or missing

Click **Refresh library covers** in **Settings → Backup and restore → Maintenance**.

## How do I start over?

Make a [backup](/docs/guides/backups) first. Then quit Kurobayomi and delete its data folders from the table above.
Your storage folder is not touched.

## Where is Kurobayomi installed on Windows?

In `%LOCALAPPDATA%\Programs\Kurobayomi`, for your user only. Uninstall it from **Settings → Apps** in Windows. Your
library and storage folder stay.
