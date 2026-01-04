# Deployment Checklist

Complete checklist for launching bagsball on Bags and deploying the dashboard.

## Pre-Launch Phase

### Code Preparation

- [ ] Clone repository
- [ ] Install dependencies: `pnpm install`
- [ ] Build successfully: `pnpm build`
- [ ] No TypeScript errors: `pnpm lint`
- [ ] Run pre-launch script: `./scripts/pre-launch.sh`
- [ ] All tests pass (if applicable)

### Documentation Review

- [ ] Read [README.md](README.md) completely
- [ ] Review [TOKENOMICS.md](docs/TOKENOMICS.md)
- [ ] Understand [BAGS_AMM.md](docs/BAGS_AMM.md)
- [ ] Understand [DIVIDENDS_BOT.md](docs/DIVIDENDS_BOT.md)
- [ ] Read [HOLDERS_GUIDE.md](docs/HOLDERS_GUIDE.md)

### Community Preparation

- [ ] Prepare announcement text
- [ ] Set up social media accounts
- [ ] Create community channels (Discord/Telegram)
- [ ] Prepare graphics and branding
- [ ] Write launch timeline

### Legal & Compliance

- [ ] Review all disclaimers
- [ ] Ensure no investment promises
- [ ] Confirm meme coin positioning
- [ ] Legal consultation (if needed)
- [ ] Tax implications understood

## Launch Phase

### Bags Platform Setup

- [ ] Create Bags account
- [ ] Verify account credentials
- [ ] Fund wallet with SOL for fees
- [ ] Navigate to token creation

### Token Configuration

**Basic Settings**:
- [ ] Name: `bagsball`
- [ ] Symbol: `$bagsball`
- [ ] Total Supply: `1,000,000,000`
- [ ] Decimals: `9`
- [ ] Description: [Use prepared text]

**Fee Configuration**:
- [ ] Add `@DividendsBot` as fee claimer
- [ ] Set DividendsBot percentage (e.g., 50%)
- [ ] Add `@BagsAMM` as fee recipient
- [ ] Set BagsAMM percentage (e.g., 30%)
- [ ] Verify total fee percentages
- [ ] Review fee routing

**Verification**:
- [ ] Double-check all settings
- [ ] Verify bot configurations
- [ ] Review fee percentages
- [ ] Confirm supply amount

### Token Deployment

- [ ] Submit token creation transaction
- [ ] Pay creation fees
- [ ] Wait for confirmation
- [ ] Save transaction signature
- [ ] **SAVE TOKEN MINT ADDRESS** (critical!)

### Immediate Post-Launch

- [ ] Verify token on Solana explorer
- [ ] Check token appears on Bags
- [ ] Verify DividendsBot is listed
- [ ] Verify BagsAMM is listed
- [ ] Confirm fee configuration visible

## Post-Launch Configuration

### Environment Setup

- [ ] Copy `.env.example`: `cp apps/worker/.env.example apps/worker/.env`
- [ ] Update `TOKEN_MINT` in `.env`
- [ ] Set `RPC_URL` (if using custom)
- [ ] Save `.env` securely

### Verification

- [ ] Run post-launch script: `./scripts/post-launch.sh`
- [ ] Verify token mint on-chain
- [ ] Check DividendsBot integration
- [ ] Check BagsAMM integration
- [ ] Confirm fee routing

### Dashboard Deployment

**Build Process**:
- [ ] Navigate to `apps/web`
- [ ] Update environment variables (if any)
- [ ] Run production build: `pnpm build`
- [ ] Test build locally: `pnpm start`
- [ ] Verify all pages load correctly

**Deployment Options**:

#### Option A: Vercel (Recommended)

- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Login: `vercel login`
- [ ] Deploy: `vercel --prod`
- [ ] Configure custom domain (optional)
- [ ] Verify deployment URL
- [ ] Test live site

#### Option B: Netlify

- [ ] Install Netlify CLI: `npm i -g netlify-cli`
- [ ] Login: `netlify login`
- [ ] Deploy: `netlify deploy --prod`
- [ ] Configure domain (optional)
- [ ] Verify deployment
- [ ] Test live site

#### Option C: Custom Server

- [ ] Set up server (Ubuntu/Debian)
- [ ] Install Node.js and pnpm
- [ ] Clone repository
- [ ] Build: `pnpm build`
- [ ] Set up PM2 or systemd
- [ ] Configure nginx/Apache
- [ ] Enable HTTPS (Let's Encrypt)
- [ ] Test deployment

### Dashboard Verification

- [ ] Visit deployed URL
- [ ] Check all pages load
- [ ] Verify wallet connection works
- [ ] Test responsive design
- [ ] Check external links
- [ ] Verify token data displays
- [ ] Test on mobile devices

## Community Launch

### Announcements

- [ ] Announce on social media
- [ ] Post in community channels
- [ ] Share on relevant forums
- [ ] Update website/landing page
- [ ] Send to crypto news sites (optional)

### Information Distribution

- [ ] Share dashboard URL
- [ ] Share token address
- [ ] Share Bags launch page
- [ ] Provide holder's guide link
- [ ] Post disclaimers prominently

### Community Management

- [ ] Set up moderation
- [ ] Pin important messages
- [ ] Answer common questions
- [ ] Monitor for scams/impersonators
- [ ] Engage with community

## Monitoring Phase

### Dashboard Monitoring

- [ ] Monitor uptime
- [ ] Check error logs
- [ ] Track user traffic
- [ ] Monitor RPC usage
- [ ] Check wallet connection success rate

### On-Chain Monitoring

- [ ] Track trading volume
- [ ] Monitor fee accumulation
- [ ] Watch DividendsBot activity
- [ ] Watch BagsAMM activity
- [ ] Track holder count growth

### Community Health

- [ ] Monitor sentiment
- [ ] Address concerns quickly
- [ ] Provide regular updates
- [ ] Celebrate milestones
- [ ] Build engagement

## Ongoing Maintenance

### Weekly Tasks

- [ ] Check dashboard functionality
- [ ] Review community feedback
- [ ] Update documentation (if needed)
- [ ] Monitor security advisories
- [ ] Backup important data

### Monthly Tasks

- [ ] Update dependencies
- [ ] Review analytics
- [ ] Plan improvements
- [ ] Community reports
- [ ] Performance optimization

### As Needed

- [ ] Fix bugs
- [ ] Add requested features
- [ ] Update documentation
- [ ] Deploy improvements
- [ ] Respond to issues

## Milestone Tracking

### Early Milestones

- [ ] First 100 holders
- [ ] First dividend payout
- [ ] First AMM cycle
- [ ] $100K market cap
- [ ] 1000 holders

### Major Milestones

- [ ] $500K market cap
- [ ] **$1M market cap** (Bags incentive!)
- [ ] 10,000 holders
- [ ] Significant exchange listing (if applicable)

### Celebrate Success

- [ ] Announce milestones
- [ ] Thank community
- [ ] Share metrics
- [ ] Plan next phase

## Emergency Procedures

### Dashboard Issues

- [ ] Monitor error reporting
- [ ] Rollback if needed
- [ ] Communicate with users
- [ ] Deploy fix quickly
- [ ] Post-mortem analysis

### Community Issues

- [ ] Address FUD promptly
- [ ] Verify all information
- [ ] Communicate transparently
- [ ] Escalate to Bags if needed
- [ ] Document incidents

### Security Concerns

- [ ] Follow [SECURITY.md](SECURITY.md)
- [ ] Report to appropriate parties
- [ ] Communicate if user-facing
- [ ] Deploy fixes ASAP
- [ ] Review security practices

## Success Metrics

Track these metrics:

- [ ] Holder count
- [ ] Trading volume
- [ ] Market cap
- [ ] Dividend payouts (# and amount)
- [ ] AMM activity
- [ ] Dashboard visitors
- [ ] Community size
- [ ] Engagement rate

## Final Reminders

### What You Control

✅ Dashboard code and hosting
✅ Documentation and communication
✅ Community management
✅ Open source contributions

### What You Don't Control

❌ DividendsBot operations
❌ BagsAMM operations
❌ Market price
❌ Trading volume
❌ Holder behavior

### Critical Disclaimers

Always maintain:
- ⚠️ Not financial advice
- ⚠️ Meme coin positioning
- ⚠️ No profit guarantees
- ⚠️ High risk warnings
- ⚠️ DYOR messaging

---

## Checklist Complete? 🎉

When all items are checked:

✅ Token launched on Bags
✅ Bots configured correctly
✅ Dashboard deployed and live
✅ Community informed
✅ Monitoring in place

**You've successfully launched bagsball!**

Remember:
- Stay transparent
- Keep community informed
- Monitor systems regularly
- Respond to feedback
- Have fun! 🚀⚽

---

*Last Updated: January 4, 2026*
