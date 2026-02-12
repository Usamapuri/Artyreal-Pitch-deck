# Development Setup Guide

## System Requirements

- Node.js v18+ (Current: v20.19.3 ✅)
- npm v8+ (Current: v10.8.2 ✅)
- Git v2.40+ (Current: v2.53.0 ✅)

## Recommended Dev Tools

### 1. Install Additional Dev Dependencies (Optional but Recommended)

```bash
npm install -D @types/react @types/react-dom
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
npm install -D autoprefixer postcss tailwindcss
```

### 2. ESLint Configuration

Create `.eslintrc.json`:
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### 3. Prettier Configuration

Create `.prettierrc`:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

### 4. Add Scripts to package.json

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "lint:fix": "eslint . --ext ts,tsx --fix",
  "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
  "type-check": "tsc --noEmit"
}
```

## PowerShell Command Cheatsheet

Since you're using PowerShell, here are common command patterns:

### Sequential Commands
```powershell
# Run commands in sequence (whether previous succeeds or not)
command1; command2; command3

# Run only if previous succeeds (requires PowerShell 7+)
command1 -and command2 -and command3
```

### Git Commands
```powershell
# Stage and commit
git add .; git commit -m "message"; git push

# Check status and log
git status; git log --oneline -5
```

### NPM Commands
```powershell
# Install and run dev
npm install; npm run dev

# Clean install
Remove-Item -Recurse -Force node_modules; npm install
```

## Performance Optimizations

### 1. Enable Vite's Fast Refresh
Already enabled via `@vitejs/plugin-react`

### 2. Use Code Splitting (Optional)
For larger apps, implement lazy loading:
```typescript
import { lazy, Suspense } from 'react';

const HeavySlide = lazy(() => import('./components/slides/HeavySlide'));

// Usage
<Suspense fallback={<div>Loading...</div>}>
  <HeavySlide />
</Suspense>
```

### 3. Optimize Bundle Size
```bash
# Analyze bundle
npm install -D rollup-plugin-visualizer
```

Add to `vite.config.ts`:
```typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
});
```

## Deployment

### Vercel (Recommended for React/Vite)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist folder to netlify.com
```

### GitHub Pages
```bash
npm install -D gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/Artyreal-Pitch-deck/',
  plugins: [react()]
});
```

## Troubleshooting

### npm ECONNRESET errors
```powershell
# Clear npm cache
npm cache clean --force

# Use different registry (if behind firewall/proxy)
npm config set registry https://registry.npmmirror.com

# Reset to default
npm config set registry https://registry.npmjs.org
```

### Git Issues
```powershell
# Verify git version
git --version  # Should be 2.53.0

# Reset git config if needed
git config --global core.autocrlf true
git config --global init.defaultBranch main
```

## VS Code Extensions (Recommended)

- ESLint
- Prettier
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense
- GitLens
- Error Lens
- Auto Rename Tag
- Path Intellisense
