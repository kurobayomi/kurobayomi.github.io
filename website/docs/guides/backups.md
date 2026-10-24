# Backups

A backup is one `.tachibk` file with your library, progress and settings. Make one before you try the nightly app, move
to another computer or start over.

## Make a backup

1. Open **Settings → Backup and restore**.
2. Click **Create backup**.
3. Choose what goes in it:
   - Library entries, chapters and episodes, tracking, history and categories
   - All read and watched entries
   - App settings, source settings, extension stores and custom buttons
   - **Include sensitive settings (e.g., tracker login tokens)**: off unless you turn it on
   - Extensions: off unless you turn it on
4. Choose where to save the file.

::: warning
A backup with sensitive settings holds your tracker logins. Keep it private.
:::

## Automatic backups

**Automatic backup frequency** in **Settings → Backup and restore** makes a backup every 6 or 12 hours, daily, every 2
days or weekly. Every 12 hours is the default. The backups go to **Backups** in your storage folder, named
`kurobayomi_<date>_<time>.tachibk`, and the newest four are kept. **Last automatically backed up** shows when the last
one was made.

Automatic backups only run while Kurobayomi is open.

## Restore a backup

1. Click **Restore from a backup** on the welcome screen, or **Restore backup** in **Settings → Backup and restore**.
2. Pick the `.tachibk` file.

On Linux and Windows you can also open a `.tachibk` file from your file manager: it opens in Kurobayomi (the stable app).

## Backups from Aniyomi, Mihon and Tachiyomi

Kurobayomi reads backups of Aniyomi (also its older format) and Mihon, so you can bring your library from your phone.

1. In the Android app, open **More → Settings → Data and storage** and tap **Create backup**.
2. Copy the `.tachibk` file to your computer.
3. Restore it in Kurobayomi as above.

Your titles come back with their progress, categories and tracking. Their sources only work once you have added a
Kurobayomi repository that has the same sources: Android extensions do not run on a computer.
