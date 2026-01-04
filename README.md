# bagsball ⚽

> A flywheel-style meme coin built for the Bags ecosystem, integrating BagsAMM and DividendsBot for automated market making and holder rewards.

[![CI](https://github.com/rthefinder/bagsball/workflows/CI/badge.svg)](https://github.com/rthefinder/bagsball/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🎯 What is bagsball?

**bagsball** ($bagsball) is a meme coin that leverages two powerful Bags primitives to create a self-reinforcing flywheel:

1. **DividendsBot** — Automatically distributes trading fees to holders proportionally
2. **BagsAMM** — Provides automated market making and liquidity support

The concept is simple: **trading volume generates fees → fees drive dividends and AMM support → increased support drives more volume → the ball keeps rolling.**

### Why Bags?

Bags is a Solana-native launchpad with built-in infrastructure for fee sharing and automation. By launching on Bags, bagsball gains:

- ✅ Native DividendsBot integration for holder rewards
- ✅ BagsAMM for continuous liquidity support
- ✅ Eligibility for the **$1M → $100K** platform incentive
- ✅ Transparent, verifiable on-chain configuration

### The Flywheel

```
📈 Trading Volume
       ↓
💸 Fees Collected
       ↓
   ↙       ↘
💰 Dividends   🤖 AMM Support
   ↓           ↓
👥 Holder      🔄 Liquidity
   Rewards     Increase
       ↓
📈 More Volume (cycle repeats)
```

---

## 🚀 Key Features

### Automated Holder Rewards

- Trading fees automatically route to DividendsBot
- Holders claim dividends proportional to ownership %
- Fully automated, no manual intervention required
- Transparent on-chain distribution

### Continuous AMM Support

- BagsAMM receives fee share at launch
- Uses fees to place strategic buy/sell orders
- Increases volume and reduces slippage
- Operates 24/7 without manual control

### Complete Transparency

- All configuration verifiable on-chain
- Open source dashboard for metrics
- Real-time integration status
- No hidden mechanisms

### Fair Launch

- 100% fair launch via Bags
- No presale, no team allocation
- Fixed supply (1B tokens)
- Equal opportunity for all participants

---

## 📊 Tokenomics

| Parameter | Value |
|-----------|-------|
| **Total Supply** | 1,000,000,000 (1B) |
| **Symbol** | $bagsball |
| **Blockchain** | Solana |
| **Decimals** | 9 |
| **Launch** | Bags Platform |
| **Distribution** | 100% fair launch |

### Fee Structure (Example)

```
Trading Fee: ~1-5% (configured at launch)
  ├─ 50% → DividendsBot (holder rewards)
  ├─ 30% → BagsAMM (market making)
  └─ 20% → Liquidity Pool
```

*Exact percentages set at launch and verifiable on-chain.*

**Read more**: [Full Tokenomics Documentation](docs/TOKENOMICS.md)

---

## 🏗️ Repository Structure

```
bagsball/
├── apps/
│   ├── web/              # Next.js dashboard
│   └── worker/           # Verification & indexer
├── packages/
│   └── shared/           # Shared types & utilities
├── docs/                 # Documentation
│   ├── BAGS_AMM.md
│   ├── DIVIDENDS_BOT.md
│   ├── HOLDERS_GUIDE.md
│   └── TOKENOMICS.md
├── scripts/              # Launch & verification scripts
│   ├── pre-launch.sh
│   └── post-launch.sh
└── .github/workflows/    # CI/CD
```

---

## 🛠️ Tech Stack

- **Monorepo**: pnpm + Turborepo
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Blockchain**: Solana, @solana/web3.js
- **Wallets**: Phantom, Solflare
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel/Netlify ready

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- pnpm ≥ 8
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/rthefinder/bagsball.git
cd bagsball

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Running Locally

```bash
# Start development servers (all apps)
pnpm dev

# Or run specific apps
cd apps/web && pnpm dev        # Dashboard on http://localhost:3000
cd apps/worker && pnpm dev     # Worker in watch mode
```

### Building for Production

```bash
# Build everything
pnpm build

# Build specific apps
pnpm --filter @bagsball/web build
pnpm --filter @bagsball/worker build
```

---

## 🔍 Verification

After launching on Bags, verify the integration:

### Automated Verification

```bash
# Configure environment
cp apps/worker/.env.example apps/worker/.env
# Edit .env and add your TOKEN_MINT address

# Run verification script
pnpm verify
```

### Manual Verification

1. Visit your token page on [bags.fm](https://bags.fm)
2. Check "Fee Recipients" section
3. Verify `@DividendsBot` is listed
4. Verify `@BagsAMM` is listed
5. Confirm fee percentages

---

## 📖 Documentation

### For Holders

- **[Holder's Guide](docs/HOLDERS_GUIDE.md)** — How to buy, hold, and claim dividends
- **[Tokenomics](docs/TOKENOMICS.md)** — Complete economic model

### For Developers

- **[BagsAMM Integration](docs/BAGS_AMM.md)** — How AMM support works
- **[DividendsBot Integration](docs/DIVIDENDS_BOT.md)** — How dividends work

### Integration Details

Both BagsAMM and DividendsBot are **independent systems** operated by the Bags team:

- ✅ bagsball configures fee sharing at launch
- ✅ Bots operate autonomously based on their logic
- ❌ bagsball does NOT control bot operations
- ❌ bagsball does NOT access bot internals
- ❌ No guaranteed outcomes or timing

All activity is **verifiable on-chain** for full transparency.

---

## 🎯 Launch Checklist

### Pre-Launch

```bash
# Run pre-launch checks
./scripts/pre-launch.sh
```

Verify:
- [ ] Dependencies installed
- [ ] Build succeeds
- [ ] Linter passes
- [ ] Documentation complete
- [ ] README mentions integrations

### Launch Steps

1. **Launch on Bags**
   - Visit [bags.fm](https://bags.fm)
   - Create token with specifications
   - Configure fee sharing:
     - Add `@DividendsBot` as fee claimer
     - Add `@BagsAMM` as fee recipient
   - Set fee percentages
   - Deploy token

2. **Post-Launch Configuration**
   ```bash
   # Update environment
   echo "TOKEN_MINT=your_mint_address" >> apps/worker/.env
   
   # Verify integration
   ./scripts/post-launch.sh
   ```

3. **Deploy Dashboard**
   ```bash
   cd apps/web
   pnpm build
   # Deploy to Vercel/Netlify/other
   ```

---

## 🤝 Community & Support

### Official Links

- **Bags Platform**: [bags.fm](https://bags.fm)
- **DividendsBot**: [bags.fm/DividendsBot](https://bags.fm/DividendsBot)
- **BagsAMM**: [bags.fm/BagsAMM](https://bags.fm/BagsAMM)

### Getting Help

For bagsball-specific questions:
- Open an issue on GitHub
- Check documentation first
- Review holder's guide

For Bags platform questions:
- Contact Bags support
- Visit Bags community channels
- Check Bags official docs

---

## ⚠️ Disclaimers

### Important Notice

bagsball is a **meme coin** designed for entertainment and community participation. It is **NOT**:

- ❌ An investment product
- ❌ Financial advice
- ❌ A guarantee of profit
- ❌ A security or regulated asset

### Risks

- **High Volatility**: Meme coins are extremely volatile
- **No Guarantees**: Dividends depend on trading volume
- **Market Risk**: Price can go to zero
- **Bot Dependency**: Relies on Bags infrastructure
- **Loss of Capital**: Only invest what you can afford to lose

### What We Control vs. Don't Control

**bagsball Controls**:
- ✅ Token launch configuration
- ✅ Dashboard development
- ✅ Documentation
- ✅ Community management

**bagsball Does NOT Control**:
- ❌ DividendsBot logic or operations
- ❌ BagsAMM logic or operations
- ❌ When dividends become claimable
- ❌ How AMM places orders
- ❌ Market price or volume

### Legal

- This is not financial, investment, legal, or tax advice
- No profit is guaranteed
- Consult professionals before participating
- Cryptocurrency investments carry significant risk
- **DYOR (Do Your Own Research)**

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🎉 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 🙏 Acknowledgments

- **Bags Team** — For building the infrastructure (DividendsBot, BagsAMM)
- **Solana** — For the blockchain foundation
- **Community** — For making bagsball possible

---

## 🔮 Next Steps

After reviewing this README:

1. **Learn More**
   - Read [Tokenomics](docs/TOKENOMICS.md)
   - Review [Holder's Guide](docs/HOLDERS_GUIDE.md)
   - Understand [BagsAMM](docs/BAGS_AMM.md) and [DividendsBot](docs/DIVIDENDS_BOT.md)

2. **Get Involved**
   - Join the community
   - Follow development
   - Participate in discussions

3. **For Developers**
   - Run locally: `pnpm install && pnpm dev`
   - Explore the codebase
   - Contribute improvements

---

<div align="center">

**bagsball — The ball keeps rolling ⚽**

*Built for Bags. Built for the community. Built for transparency.*

</div>
