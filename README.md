# Personal Webpage

A modern, responsive personal webpage built with React, TypeScript, and Tailwind CSS showcasing projects, research interests, teaching experience, and contact information.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚛️ Built with React 19 and TypeScript
- 🚀 Fast development with Vite
- 📱 Mobile-friendly interface
- 🌐 Deployed on GitHub Pages

## Local Development

**Prerequisites:** Node.js 18+ and npm

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured to deploy automatically to GitHub Pages via GitHub Actions.

### Automatic Deployment

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://mwazakd.github.io`

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder contents to the `gh-pages` branch (or configure GitHub Pages to use the `dist` folder from the main branch)

## Project Structure

```
├── components/          # React components
├── public/              # Static assets
│   └── assets/         # Images and PDFs
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── index.html          # HTML entry point
├── index.tsx           # React entry point
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)

## License

This project is private and personal.
