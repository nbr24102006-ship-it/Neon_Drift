/**
 * Neon Drift source entry reserved for future modularization.
 *
 * The current game intentionally remains self-contained in /index.html so it
 * can still be opened directly in a browser without a build step.
 */
export const neonDriftProject = {
  name: 'Neon Drift: Enhanced Edition',
  version: '2.1.0',
  entry: 'index.html',
  guestPlay: true,
  leaderboardLoginRequired: true,
  multiplayerStatus: 'work-in-progress'
} as const;
