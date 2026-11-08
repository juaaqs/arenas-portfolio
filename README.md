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

Place site images in `public/images/`. Home uses `main.jpg`, About uses `main2.jpg`, and milestone cover images are assigned in `src/data/portfolio.js`. Achievement cards without an assigned image keep the cover placeholder.

Shared components live in `src/components/`, page content in `src/pages/`, and portfolio details in `src/data/portfolio.js`.
