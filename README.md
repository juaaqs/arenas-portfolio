# Juaquin Arenas — Portfolio

A React portfolio for an IT student, football and futsal player, and curious builder. The design uses expressive display typography, a moving marquee, numbered profile highlights, animated reveals, and a project gallery.

## Run locally

```sh
npm install
npm run dev
```

## Build for production

```sh
npm run build
npm run preview
```

## Routes

- `/` — Home and featured work
- `/about` — Biography, milestones, skills, and achievements
- `/projects` — Project cards
- `/contact` — Email and phone links

## Add photos

Place site images in `public/images/`. The profile photo is `public/images/main.jpg`; it appears on the Home and About pages. Achievement photo spaces are in `src/pages/About.jsx` and can be connected as more images are added.

Shared components live in `src/components/`, page content in `src/pages/`, and portfolio details in `src/data/portfolio.js`.
