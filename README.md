# Trail Stories — First Draft

A simple mobile-friendly web app for guided, responsible hiking storytelling.

## What this first version does

- Lists trails
- Start checkpoint with quick facts + invitation
- During the walk: a few calm “landscape speaking” photography prompts
- End checkpoint: human-written tips + a simple post draft form
- Placeholder stories wall

No accounts, no real image storage, no AI yet. Just the structure and tone.

## How to run it on your computer

1. Make sure you have **Node.js** installed (version 18 or newer).  
   Download from: https://nodejs.org

2. Open a terminal in this folder (`trail-stories`).

3. Install the packages (only needed once):

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser (or your phone on the same Wi-Fi) at:

```
http://localhost:3000
```

You can also scan a QR code that points to that address while testing.

## How to customise

- **Prompts & trail info**: edit `src/data/trails.ts`
- **Colours & look**: edit `src/app/globals.css`
- **Pages**: look in `src/app/...`

## Next steps (when you are ready)

- Real photo upload + storage
- Saving stories so they appear on the wall
- QR codes for physical checkpoints
- More trails

Keep it simple for now. This is a working foundation.
