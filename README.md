# Artyreal Pitch Deck

Interactive product pitch deck for **Artyreal** - a design-first software house based in Islamabad, Pakistan.

## Overview

This pitch deck showcases Artyreal's portfolio of enterprise SaaS products:

- **RotaClock** - Workforce scheduling and logistics platform for hospitality businesses
- **Coworking PWA** - Progressive web app for coworking space management
- **HostelFlow** - Multi-tenant SaaS for hostel and student accommodation management
- **Primax** - Operating system for modern schools and educational institutions

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icon library

## Run Locally

**Prerequisites:** Node.js (v18 or higher)

1. Clone the repository:
   ```bash
   git clone https://github.com/Usamapuri/Artyreal-Pitch-deck.git
   cd Artyreal-Pitch-deck
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
npm run preview
```

## Navigation

- Use **Arrow Keys** (←/→ or ↑/↓) to navigate between slides
- Press **Spacebar** to advance to the next slide
- Click the navigation dots to jump to a specific slide

## Project Structure

```
artyreal-pitch-deck/
├── components/
│   ├── slides/          # Individual slide components
│   ├── Navigation.tsx   # Slide navigation UI
│   └── ArtyrealLogo.tsx # Brand logo component
├── App.tsx              # Main application and slide orchestration
├── index.tsx            # Application entry point
├── types.ts             # TypeScript type definitions
└── vite.config.ts       # Vite configuration
```

## Contact

- **Website:** [Artyreal.com](https://artyreal.com)
- **Email:** hello@artyreal.com
- **Location:** Islamabad, Pakistan

---

Built with ❤️ by Artyreal
