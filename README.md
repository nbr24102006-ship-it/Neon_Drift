# Neon Drift: Enhanced Edition

Neon Drift is an HTML5 survival arcade game. The full playable game remains in `index.html`, so you can open it directly in a modern browser. The surrounding project files make the repository ready for GitHub and Vite-based hosting.

## Project structure

```text
Neon_Drift_Project/
├── src/
│   └── main.ts
├── .env.example
├── .gitignore
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Play directly

Open `index.html` in a modern browser. No login is required to play.

Leaderboard login is optional and is only used to view rankings and submit a ranked score. In this standalone build, account and leaderboard data are stored locally in the browser.

## Run with Vite

1. Install Node.js.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local address shown by Vite.

For a production build, run `npm run build` and deploy the generated `dist/` folder.

## Future Firebase support

`.env.example` contains placeholders for Firebase configuration. They are not required by the current version. Firebase Authentication + Firestore can be connected later for a real shared online leaderboard.
