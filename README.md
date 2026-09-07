# Saladin — HSIE Assessment Website

A static website presenting a three-part HSIE assessment on Saladin (Salah al-Din Yusuf ibn Ayyub).

| Page | Content |
| --- | --- |
| `index.html` | Overview and links to each part |
| `part-a.html` | Part A — Source Analysis (Origin, Purpose, Value, Limitation for a primary and a secondary source) |
| `part-b.html` | Part B — Biography Poster (background, achievements, timeline, impact, sources) |
| `part-c.html` | Part C — Source Evaluation of Ibn Shaddād's history |

No build step and no dependencies — plain HTML, CSS and one small JavaScript file.

## Viewing it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000

## Publishing with GitHub Pages

Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)`.

## Image credits

All images come from Wikimedia Commons and are public domain or freely licensed. See
[`images/CREDITS.md`](images/CREDITS.md) for the file-by-file list.
