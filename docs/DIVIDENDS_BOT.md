# DividendsBot Integration Guide

## What is DividendsBot?

**DividendsBot** is a fee redistribution system on Bags that automatically distributes trading fees to token holders proportionally based on their ownership percentage.

## How It Works

### Core Mechanics

1. **Fee Collection**
   - DividendsBot is configured as a fee claimer at token launch
   - A percentage of trading fees are routed to DividendsBot
   - Fees accumulate until the payout threshold is reached

2. **Dividend Calculation**
   - When threshold is met, DividendsBot calculates each holder's share
   - Share is proportional to % of total supply owned
   - Formula: `holder_dividend = (holder_balance / total_supply) * total_fees`

3. **Distribution**
   - Holders can claim their dividends through Bags interface
   - Claims are processed automatically by the bot
   - History is recorded on-chain

### Example

If you hold 2% of bagsball supply and 1000 SOL in fees are accumulated:
- Your claimable dividend: `0.02 * 1000 = 20 SOL`

## Configuration at Launch

When launching bagsball on Bags:

1. **Navigate to Bags Launch Interface**
   - Go to [bags.fm](https://bags.fm)
   - Initiate token creation

2. **Add DividendsBot as Fee Claimer**
   - Find the "Fee Claimers" section
   - Add `@DividendsBot` as a claimer
   - Allocate fee percentage (recommended: 40-60%)

3. **Set Dividend Parameters** (if available)
   - Minimum payout threshold
   - Distribution frequency
   - Other bot-specific settings

4. **Verify Configuration**
   - Check that DividendsBot appears in claimers list
   - Confirm percentage allocation
   - Complete token launch

## Holder Experience

### Checking Dividend Status

Holders can check their claimable dividends:

1. Visit [bags.fm](https://bags.fm)
2. Connect wallet
3. Navigate to token page
4. View "My Dividends" section

### Claiming Dividends

When dividends are claimable:

1. Go to bagsball token page on Bags
2. Click "Claim Dividends"
3. Approve transaction in wallet
4. Receive SOL/fees directly to wallet

### Dividend Timeline

```
Trading Activity
      ↓
Fees Accumulate in DividendsBot
      ↓
Threshold Reached
      ↓
Dividends Become Claimable
      ↓
Holders Claim Their Share
      ↓
Cycle Repeats
```

## Verification

After launch, verify DividendsBot integration:

```bash
# Run verification script
pnpm verify

# Or manually check
# Visit: https://bags.fm/token/YOUR_TOKEN_MINT
# Check "Fee Claimers" section
```

## What bagsball Does NOT Control

⚠️ **Critical Disclaimers**

- bagsball **does NOT** control DividendsBot logic
- The project cannot:
  - Force dividend payouts
  - Change payout amounts
  - Access DividendsBot's internal state
  - Modify distribution parameters
  - Guarantee dividend amounts or timing

## Important Notes

### Dividends Depend On Volume

- No trading = no fees = no dividends
- High volume = more fees = larger dividends
- Dividends are NOT guaranteed

### Holding Requirements

- You must hold tokens in your wallet
- Tokens in exchanges may not be eligible (check exchange policy)
- Snapshot timing determined by DividendsBot

### Tax Implications

- Dividends may be taxable in your jurisdiction
- Consult a tax professional
- bagsball provides no tax advice

## Transparency

All DividendsBot activity is verifiable:

- Fee collection: On-chain transactions
- Distribution events: Recorded in Solana history
- Holder snapshots: Derived from blockchain state
- Configuration: Visible in Bags token metadata

## FAQs

### How much goes to DividendsBot?

This is set at launch. Typical range: 40-60% of trading fees.

### When do dividends become claimable?

When the accumulated fees reach DividendsBot's payout threshold. This varies based on bot configuration and trading volume.

### Do I need to manually claim?

Yes, holders must initiate claims through the Bags interface. The project cannot auto-claim on your behalf.

### What if I miss a claim window?

Check DividendsBot documentation on Bags. Typically, unclaimed dividends roll over or remain claimable.

### Can I opt out of dividends?

Dividends are automatic based on ownership. If you don't want to receive them, you can choose not to claim (though fees are still collected).

## Resources

- **DividendsBot Profile**: [bags.fm/DividendsBot](https://bags.fm/DividendsBot)
- **Bags Platform**: [bags.fm](https://bags.fm)
- **Claim Interface**: Available on token page after launch

## Support

For DividendsBot-specific issues:
- Contact Bags support team
- Visit Bags community channels
- Check official Bags documentation

bagsball provides integration guidance only. We do not operate or support DividendsBot.

## Security Note

Always verify you're on the official Bags website before connecting your wallet or claiming dividends. Never share your seed phrase with anyone.
