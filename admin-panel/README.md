# Rexmyze Admin Panel

This is a separate admin panel for Rexmyze Academy. It communicates with the main website's API to fetch lead and message data.

## Deployment

1. Create a new project on Vercel (or your preferred host).
2. Point it to this `admin-panel` directory.
3. It will automatically connect to `https://rexmyze.vercel.app` for data.

## Local Development

```bash
npm install
npm run dev
```

The panel is protected by the same `ADMIN_PASSWORD` defined in the main project's environment variables.
