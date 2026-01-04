# Repository Navigation Guide

Quick reference for navigating the bagsball repository.

## 📂 Directory Structure

```
bagsball/
│
├── 📱 apps/                     Application workspaces
│   ├── web/                     Next.js Dashboard
│   │   ├── src/
│   │   │   ├── app/            Next.js App Router pages
│   │   │   └── components/     React components
│   │   ├── package.json
│   │   └── [config files]
│   │
│   └── worker/                  Verification & Indexer
│       ├── src/
│       │   ├── verify.ts       Verification script
│       │   └── index.ts        Worker stub
│       └── package.json
│
├── 📦 packages/                 Shared packages
│   └── shared/                  Common code
│       ├── src/
│       │   ├── types.ts        TypeScript types
│       │   ├── utils.ts        Utility functions
│       │   └── index.ts        Package exports
│       └── package.json
│
├── 📚 docs/                     Documentation
│   ├── BAGS_AMM.md             AMM integration guide
│   ├── DIVIDENDS_BOT.md        Dividends guide
│   ├── HOLDERS_GUIDE.md        Holder manual
│   └── TOKENOMICS.md           Economic model
│
├── 🔧 scripts/                  Automation scripts
│   ├── pre-launch.sh           Pre-launch checks
│   └── post-launch.sh          Post-launch verification
│
├── ⚙️ .github/                  GitHub configuration
│   └── workflows/              CI/CD workflows
│       ├── ci.yml              Continuous integration
│       └── deploy.yml          Deployment automation
│
└── 📄 Root Files               Configuration & docs
    ├── README.md               Main documentation
    ├── QUICKSTART.md           5-minute guide
    ├── DEPLOYMENT_CHECKLIST.md Launch checklist
    ├── PROJECT_SUMMARY.md      Project overview
    ├── WHATS_NEXT.md           Roadmap & next steps
    ├── CONTRIBUTING.md         Contribution guide
    ├── SECURITY.md             Security policy
    ├── LICENSE                 MIT License
    ├── package.json            Root workspace config
    ├── pnpm-workspace.yaml     Workspace definition
    ├── turbo.json              Monorepo config
    ├── tsconfig.json           TypeScript config
    ├── .gitignore              Git ignore rules
    └── .prettierrc             Code formatting
```

## 🎯 Quick Navigation by Task

### I Want To...

#### Get Started
- **Run locally**: [QUICKSTART.md](QUICKSTART.md)
- **Understand project**: [README.md](README.md)
- **See overview**: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

#### Learn About Integrations
- **BagsAMM**: [docs/BAGS_AMM.md](docs/BAGS_AMM.md)
- **DividendsBot**: [docs/DIVIDENDS_BOT.md](docs/DIVIDENDS_BOT.md)
- **Economics**: [docs/TOKENOMICS.md](docs/TOKENOMICS.md)

#### Launch the Project
- **Checklist**: [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- **Pre-launch script**: [scripts/pre-launch.sh](scripts/pre-launch.sh)
- **Post-launch script**: [scripts/post-launch.sh](scripts/post-launch.sh)

#### Develop Features
- **Dashboard code**: [apps/web/src/](apps/web/src/)
- **Components**: [apps/web/src/components/](apps/web/src/components/)
- **Shared code**: [packages/shared/src/](packages/shared/src/)
- **Contributing guide**: [CONTRIBUTING.md](CONTRIBUTING.md)

#### Understand for Holders
- **Holder guide**: [docs/HOLDERS_GUIDE.md](docs/HOLDERS_GUIDE.md)
- **How to claim**: [docs/DIVIDENDS_BOT.md](docs/DIVIDENDS_BOT.md)
- **Tokenomics**: [docs/TOKENOMICS.md](docs/TOKENOMICS.md)

#### Plan Next Steps
- **Roadmap**: [WHATS_NEXT.md](WHATS_NEXT.md)
- **Enhancement ideas**: [WHATS_NEXT.md#enhancement-roadmap](WHATS_NEXT.md#enhancement-roadmap)

## 📱 Frontend Components Guide

Located in [apps/web/src/components/](apps/web/src/components/)

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Dashboard.tsx` | Main orchestrator | Coordinates all components |
| `Header.tsx` | Navigation bar | Logo, wallet connection |
| `Footer.tsx` | Footer section | Links, disclaimers |
| `StatsGrid.tsx` | Token statistics | Supply, holders, market cap |
| `FlywheelVisualization.tsx` | Animated diagram | Visual flow representation |
| `IntegrationStatus.tsx` | Bot status | DividendsBot & BagsAMM status |
| `HoldersTable.tsx` | Top holders | Privacy-masked addresses |
| `InfoPanel.tsx` | Educational cards | Reusable info display |
| `WalletProvider.tsx` | Wallet context | Solana wallet integration |

## 📦 Shared Package Exports

Located in [packages/shared/src/](packages/shared/src/)

### Types ([types.ts](packages/shared/src/types.ts))
- `BagsballConfig` - Token configuration
- `FeeShareConfig` - Fee sharing setup
- `HolderStats` - Holder information
- `DividendsStatus` - Dividend state
- `AMMStatus` - AMM state
- `FlywheelMetrics` - Flywheel data
- `VerificationResult` - Verification output

### Utils ([utils.ts](packages/shared/src/utils.ts))
- `formatNumber()` - Number formatting
- `lamportsToTokens()` - Unit conversion
- `tokensToLamports()` - Unit conversion
- `calculatePercentage()` - Percentage calc
- `maskAddress()` - Privacy masking
- `formatTimestamp()` - Time formatting
- `getTimeUntil()` - Countdown display
- `calculateDividendShare()` - Dividend calc

### Constants ([types.ts](packages/shared/src/types.ts))
- `BAGSBALL_SYMBOL` - Token symbol
- `BAGS_PLATFORM_URL` - Bags URL
- `DIVIDENDS_BOT_PROFILE` - Bot URL
- `BAGS_AMM_PROFILE` - AMM URL
- `TARGET_MARKET_CAP` - $1M target
- `BAGS_REWARD` - $100K reward

## 🔧 Scripts Reference

### Pre-Launch Script
**Location**: [scripts/pre-launch.sh](scripts/pre-launch.sh)

**Checks**:
1. Dependencies installed
2. Build succeeds
3. Linter passes
4. Documentation present
5. README complete

**Usage**:
```bash
./scripts/pre-launch.sh
```

### Post-Launch Script
**Location**: [scripts/post-launch.sh](scripts/post-launch.sh)

**Actions**:
1. Check environment setup
2. Verify TOKEN_MINT set
3. Run verification script
4. Display results

**Usage**:
```bash
./scripts/post-launch.sh
```

### Verification Script
**Location**: [apps/worker/src/verify.ts](apps/worker/src/verify.ts)

**Verifies**:
- Token mint exists
- DividendsBot configured
- BagsAMM configured
- Fee share valid

**Usage**:
```bash
pnpm verify
```

## 📚 Documentation Index

### For Everyone
1. [README.md](README.md) - Start here!
2. [QUICKSTART.md](QUICKSTART.md) - Get running fast
3. [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Big picture

### For Developers
1. [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
2. [SECURITY.md](SECURITY.md) - Security policy
3. Component files - In-code documentation

### For Launch Team
1. [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Launch steps
2. [WHATS_NEXT.md](WHATS_NEXT.md) - Post-launch roadmap
3. [docs/TOKENOMICS.md](docs/TOKENOMICS.md) - Economics

### For Community
1. [docs/HOLDERS_GUIDE.md](docs/HOLDERS_GUIDE.md) - For holders
2. [docs/BAGS_AMM.md](docs/BAGS_AMM.md) - AMM explained
3. [docs/DIVIDENDS_BOT.md](docs/DIVIDENDS_BOT.md) - Dividends explained

## ⚙️ Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Root workspace configuration |
| `pnpm-workspace.yaml` | Workspace definition |
| `turbo.json` | Monorepo build pipeline |
| `tsconfig.json` | Base TypeScript config |
| `.gitignore` | Git ignore patterns |
| `.prettierrc` | Code formatting rules |

## 🚀 Common Commands

```bash
# Installation
pnpm install                    # Install dependencies

# Development
pnpm dev                        # Run all apps
pnpm --filter @bagsball/web dev # Dashboard only

# Building
pnpm build                      # Build all
pnpm --filter @bagsball/web build

# Code Quality
pnpm lint                       # Run linter
pnpm format                     # Format code

# Verification
pnpm verify                     # Verify configuration

# Scripts
./scripts/pre-launch.sh        # Pre-launch checks
./scripts/post-launch.sh       # Post-launch verify

# Cleaning
pnpm clean                      # Clean build artifacts
```

## 🔍 Finding Things

### Want to change...

**Colors/Theme**:
- [apps/web/tailwind.config.js](apps/web/tailwind.config.js)
- [apps/web/src/app/globals.css](apps/web/src/app/globals.css)

**Text Content**:
- Components in [apps/web/src/components/](apps/web/src/components/)
- Docs in [docs/](docs/)

**Constants**:
- [packages/shared/src/types.ts](packages/shared/src/types.ts)

**Wallet Integration**:
- [apps/web/src/components/WalletProvider.tsx](apps/web/src/components/WalletProvider.tsx)

**Verification Logic**:
- [apps/worker/src/verify.ts](apps/worker/src/verify.ts)

**Build Configuration**:
- [turbo.json](turbo.json) for build pipeline
- Individual `package.json` files for each app

## 📊 File Count by Type

- **TypeScript/TSX**: 20 files
- **Markdown**: 11 files
- **JSON**: 7 files
- **JavaScript**: 5 files
- **Shell Scripts**: 2 files
- **YAML**: 3 files
- **Other**: 1 file

**Total**: 49 files

## 🎯 Priority Reading Order

1. **[README.md](README.md)** - Essential overview
2. **[QUICKSTART.md](QUICKSTART.md)** - Get running
3. **[docs/TOKENOMICS.md](docs/TOKENOMICS.md)** - Understand economics
4. **[docs/BAGS_AMM.md](docs/BAGS_AMM.md)** - AMM integration
5. **[docs/DIVIDENDS_BOT.md](docs/DIVIDENDS_BOT.md)** - Dividends
6. **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Launch
7. **[WHATS_NEXT.md](WHATS_NEXT.md)** - Roadmap

## 💡 Tips

- **New to the project?** Start with [README.md](README.md)
- **Want to develop?** Read [CONTRIBUTING.md](CONTRIBUTING.md)
- **Ready to launch?** Use [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- **Need help?** Check docs first, then open an issue
- **Want to contribute?** Pick a component and improve it!

---

**Navigate efficiently. Build confidently. Launch successfully! 🚀⚽**
