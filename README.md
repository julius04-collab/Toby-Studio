# Toby Studio

Portfolio of Tobiloba Julius — UI/UX, landing pages, mobile apps and AI-built websites.

Static site, no build step. Deploy by importing this repository into Vercel (framework preset: **Other**).

## Pages

| Path | File | Contents |
|---|---|---|
| `/` | `index.html` | Hero, 4 featured projects, AI websites, process, about, testimonials, FAQ, contact |
| `/work/` | `work/index.html` | All projects with filters |
| `/playground/` | `playground/index.html` | Playground photo grid |

Shared styles: `assets/site.css`. Shared scripts and content: `assets/site.js`.

## Updating content

Everything editable lives in the arrays at the top of `assets/site.js`:

- `projectData` — case studies (images in `assets/img/<folder>/`, `-t.webp` thumbnails; optional `behance` and `prototypeLink`)
- `aiProjects` — AI-built websites (videos in `assets/video/`, posters in `assets/img/ai/`)
- `playground`, `steps`, `testimonials`

Featured projects on the homepage are set by `data-featured` on `#cases` in `index.html`.

Images are WebP (max 1600px wide, 800px versions for grids); videos are 720p H.264 without audio.
When adding a page, also add it to `sitemap.xml`.
