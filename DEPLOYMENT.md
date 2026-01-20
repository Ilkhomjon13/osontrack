# Railway deployment (OsonTrack static site)

This project is a static site that lives under `src/`. Deploy it on Railway by
running a simple static server that points to `src`.

## Option A — GitHub integration (recommended)

1. Push this repository to GitHub (any branch you want to deploy).
2. Open Railway and create a **New Project**.
3. Choose **Deploy from GitHub repo** and select this repository.
4. In **Settings → Build & Deploy**, set:
   - **Root Directory**: leave empty (repo root).
   - **Build Command**: leave empty (not required for a static site).
   - **Start Command**:
     ```bash
     python -m http.server $PORT --directory src
     ```
5. Click **Deploy**.

## Option B — Railway CLI (manual)

1. Install the Railway CLI and log in:
   ```bash
   npm i -g @railway/cli
   railway login
   ```
2. Initialize and deploy from this repo root:
   ```bash
   railway init
   railway up
   ```
3. In the Railway dashboard, set the **Start Command** to:
   ```bash
   python -m http.server $PORT --directory src
   ```

## Notes

- Railway automatically sets `$PORT` for the service.
- If you later add a build step (e.g., bundler), update the Build Command
  accordingly and point the server to the build output.
