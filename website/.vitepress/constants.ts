// Where the app lives. Every page reads these, so a move is one edit here.
export const OWNER = "kurobayomi";
export const REPO = "kurobayomi";
export const APP_REPO = `https://github.com/${OWNER}/${REPO}`;
export const ISSUES = `${APP_REPO}/issues`;
export const RELEASES = `${APP_REPO}/releases`;
export const STABLE_FILE = "Kurobayomi-x86_64.AppImage";
export const STABLE_URL = `${RELEASES}/latest/download/${STABLE_FILE}`;
export const NIGHTLY_FILE = "Kurobayomi-nightly-x86_64.AppImage";
export const NIGHTLY_URL = `${RELEASES}/download/nightly/${NIGHTLY_FILE}`;
export const WINDOWS_STABLE_FILE = "Kurobayomi-Setup-x86_64.exe";
export const WINDOWS_STABLE_URL = `${RELEASES}/latest/download/${WINDOWS_STABLE_FILE}`;
export const WINDOWS_NIGHTLY_FILE = "Kurobayomi-Nightly-Setup-x86_64.exe";
export const WINDOWS_NIGHTLY_URL = `${RELEASES}/download/nightly/${WINDOWS_NIGHTLY_FILE}`;
