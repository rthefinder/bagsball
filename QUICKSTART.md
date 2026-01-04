# Quick Start Guide

Get bagsball running locally in under 5 minutes.

## Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) ≥ 18
- [pnpm](https://pnpm.io/) ≥ 8

Check versions:
```bash
node --version  # should be 18+
pnpm --version  # should be 8+
```

## Installation

### Step 1: Clone Repository

```bash
git clone https://github.com/rthefinder/bagsball.git
cd bagsball
```

### Step 2: Install Dependencies

```bash
pnpm install
```

This will install all dependencies for:
- Root workspace
- Web dashboard
- Worker/verification tools
- Shared packages

### Step 3: Build Packages

```bash
pnpm build
```

This builds:
- Shared package (types & utils)
- Web dashboard (Next.js)
- Worker tools

## Running Locally

### Start Everything

```bash
pnpm dev
```

This starts all apps in development mode:
- **Dashboard**: http://localhost:3000
- **Worker**: Watch mode (for development)

### Start Individual Apps

```bash
# Dashboard only
cd apps/web
pnpm dev

# Worker only
cd apps/worker
pnpm dev
```

## Accessing the Dashboard

1. Open browser to http://localhost:3000
2. You should see the bagsball dashboard
3. Connect your Solana wallet (Phantom or Solflare)
4. Explore the UI

## What You'll See

### Dashboard Sections

1. **Hero** - Introduction to bagsball
2. **Stats Grid** - Token metrics (placeholder data)
3. **Flywheel Visualization** - Animated diagram
4. **Integration Status** - DividendsBot & BagsAMM status
5. **Info Panels** - Educational content
6. **Top Holders** - Holder distribution (mock data)
7. **Disclaimer** - Important warnings

### Interactive Elements

- **Wallet Connection** - Top right corner
- **External Links** - To Bags, DividendsBot, BagsAMM
- **Responsive Design** - Try different screen sizes

## Project Structure Overview

```
bagsball/
├── apps/web/          👈 Dashboard you're viewing
├── apps/worker/       👈 Verification scripts
├── packages/shared/   👈 Common code
├── docs/              👈 Documentation
└── scripts/           👈 Launch automation
```

## Common Commands

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run all apps in dev mode
pnpm dev

# Lint code
pnpm lint

# Format code
pnpm format

# Clean build artifacts
pnpm clean

# Run verification (after launch)
pnpm verify
```

## Development Tips

### Hot Reload

Changes to source files trigger automatic reload:
- **Frontend**: Next.js fast refresh
- **Worker**: tsx watch mode
- **Shared**: Rebuilds on change

### Adding Dependencies

```bash
# Root workspace
pnpm add -w <package>

# Specific app
pnpm --filter @bagsball/web add <package>
pnpm --filter @bagsball/worker add <package>
pnpm --filter @bagsball/shared add <package>
```

### Code Formatting

```bash
# Format all files
pnpm format

# Check formatting
npx prettier --check "**/*.{ts,tsx,md,json}"
```

## Troubleshooting

### Port Already in Use

If port 3000 is taken:
```bash
cd apps/web
PORT=3001 pnpm dev
```

### Build Errors

Clear and rebuild:
```bash
pnpm clean
pnpm install
pnpm build
```

### TypeScript Errors

Ensure shared package is built:
```bash
cd packages/shared
pnpm build
```

### Wallet Connection Issues

- Ensure wallet extension is installed
- Try refreshing the page
- Check browser console for errors
- Make sure you're on a supported browser (Chrome, Firefox, Brave)

## Next Steps

### For Developers

1. **Explore the Code**
   - Check [apps/web/src/components](apps/web/src/components)
   - Review [packages/shared/src](packages/shared/src)
   - Read [apps/worker/src](apps/worker/src)

2. **Make Changes**
   - Edit a component
   - See hot reload in action
   - Experiment with the UI

3. **Read Documentation**
   - [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
   - [docs/](docs/) - Integration guides

### For Launch Preparation

1. **Review Documentation**
   - Read [README.md](README.md) completely
   - Study [docs/TOKENOMICS.md](docs/TOKENOMICS.md)
   - Understand [docs/BAGS_AMM.md](docs/BAGS_AMM.md)
   - Understand [docs/DIVIDENDS_BOT.md](docs/DIVIDENDS_BOT.md)

2. **Run Pre-Launch Checks**
   ```bash
   ./scripts/pre-launch.sh
   ```

3. **Prepare for Launch**
   - Set up Bags account
   - Prepare community channels
   - Plan launch announcement

## Getting Help

- **Documentation**: Check [docs/](docs/) folder
- **Issues**: Open issue on GitHub
- **Community**: Join community channels
- **Bags Support**: For platform questions

## Production Deployment

When ready to deploy:

1. **Build for Production**
   ```bash
   cd apps/web
   pnpm build
   ```

2. **Deploy Options**
   - [Vercel](https://vercel.com) (recommended)
   - [Netlify](https://netlify.com)
   - Custom server

3. **Environment Variables**
   - Set `RPC_URL` for Solana connection
   - Set `TOKEN_MINT` after launch

## Resources

- **Main README**: [README.md](README.md)
- **Project Summary**: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
- **Tokenomics**: [docs/TOKENOMICS.md](docs/TOKENOMICS.md)
- **Holder Guide**: [docs/HOLDERS_GUIDE.md](docs/HOLDERS_GUIDE.md)

---

**You're ready to go! 🚀**

Visit http://localhost:3000 and explore the dashboard.
