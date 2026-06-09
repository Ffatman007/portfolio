# Kazi Zunaid Bin Zakaria — Portfolio

Live site: **https://Ffatman007.github.io/portfolio**

Built with React + Vite. Deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch.

---

## How to update content

All content lives in these files — no config files, no CMS:

| Section | File |
|---------|------|
| Hero stats & CTA | `src/components/Hero.jsx` — edit the `STATS` array |
| About paragraph & tags | `src/components/About.jsx` — edit the paragraph text and `TAGS` array |
| Work experience | `src/components/Experience.jsx` — edit the `EXPERIENCE` array |
| Skills cards | `src/components/Skills.jsx` — edit the `SKILLS` array |
| Contact info | `src/components/Contact.jsx` — edit the `CONTACT_CARDS` array |
| Footer year/location | `src/components/Footer.jsx` |
| Colors & fonts | `src/index.css` — CSS variables at the top |

After editing, run `npm run deploy` to push the update live.
