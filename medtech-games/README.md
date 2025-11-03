# MedTech Games Monorepo

A monorepo containing both mobile and web applications for MedTech Games.

## Structure

```
medtech-games/
├── apps/
│   ├── medtech-mobile/     # Expo React Native mobile app
│   └── medtech-web/        # React web application
├── packages/
│   └── assets/             # Shared assets package
└── turbo.json              # Turborepo configuration
```

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- For mobile development: Expo Go app (iOS/Android) or emulator

## Getting Started

### Install Dependencies

```bash
npm install
```

This will install dependencies for all workspaces.

## Available Scripts

### Root Level

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps
- `npm run lint` - Lint all apps

### Mobile App (medtech-mobile)

```bash
cd apps/medtech-mobile

# Start Expo development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web
```

### Web App (medtech-web)

```bash
cd apps/medtech-web

# Start development server (port 30017)
npm start

# Build for production
npm run build
```

## Using Shared Packages

The monorepo uses workspace references. To use shared assets:

```javascript
// In any app
import { logo } from '@medtech/assets';
```

## Technology Stack

- **Mobile**: Expo + React Native
- **Web**: React + Create React App
- **Monorepo**: Turborepo + npm workspaces

## Development

Both apps share common dependencies through the monorepo structure. When you run commands from the root:

- `npm run dev` will start all dev servers
- `npm run build` will build all apps
- Changes to shared packages are reflected immediately

