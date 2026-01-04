# BagsAMM Integration Guide

## What is BagsAMM?

**BagsAMM** is an automated market maker bot native to the Bags ecosystem. It is designed to provide continuous liquidity support and market making for tokens launched on Bags.

## How It Works

### Core Mechanics

1. **Fee Collection**
   - BagsAMM is configured as a fee recipient at token launch
   - A percentage of trading fees are automatically routed to BagsAMM
   - Fees accumulate in BagsAMM's wallet

2. **Automated Market Making**
   - BagsAMM uses collected fees to place buy and sell orders
   - Orders are strategically placed to support price stability
   - The bot continuously adjusts based on market conditions

3. **Volume Generation**
   - Market making activity increases overall trading volume
   - Higher volume attracts more traders
   - Creates a positive feedback loop

### Benefits for bagsball

- **Liquidity Support**: Reduces slippage for traders
- **Price Stability**: Automated orders dampen volatility
- **Volume Growth**: AMM activity increases total volume
- **24/7 Operation**: No manual intervention required

## Configuration at Launch

When launching bagsball on Bags, follow these steps:

1. **Navigate to Bags Launch Interface**
   - Go to [bags.fm](https://bags.fm)
   - Initiate token creation

2. **Add BagsAMM as Fee Recipient**
   - Find the "Fee Recipients" section
   - Add `@BagsAMM` as a recipient
   - Allocate fee percentage (recommended: 20-40%)

3. **Verify Configuration**
   - Check that BagsAMM appears in fee recipients list
   - Confirm percentage allocation
   - Complete token launch

## Verification

After launch, you can verify BagsAMM integration:

```bash
# Run verification script
pnpm verify

# Or manually check on Bags
# Visit: https://bags.fm/token/YOUR_TOKEN_MINT
```

## What bagsball Does NOT Control

⚠️ **Important Disclaimers**

- bagsball **does NOT** control BagsAMM logic
- BagsAMM operates independently according to its own algorithms
- The project cannot:
  - Force BagsAMM to make specific trades
  - Access BagsAMM's internal state
  - Modify BagsAMM's behavior
  - Guarantee specific outcomes

## Transparency

All BagsAMM activity is on-chain and verifiable:

- Fee transfers: Visible in token's transaction history
- AMM trades: Visible on Solana explorers
- Configuration: Visible in Bags token metadata

## FAQs

### How much of fees go to BagsAMM?

This is configured at launch. A typical range is 20-40% of trading fees.

### When does BagsAMM start operating?

BagsAMM begins making markets once sufficient fees have accumulated. The exact threshold is determined by BagsAMM's internal logic.

### Can BagsAMM be removed later?

Fee recipient configuration is typically immutable after launch. Verify your configuration carefully before deploying.

### What if BagsAMM stops working?

BagsAMM is maintained by the Bags team. If issues arise, they are responsible for resolution. bagsball has no control over BagsAMM operations.

## Resources

- **BagsAMM Profile**: [bags.fm/BagsAMM](https://bags.fm/BagsAMM)
- **Bags Platform**: [bags.fm](https://bags.fm)
- **Bags Documentation**: Check official Bags docs for latest AMM details

## Support

For BagsAMM-specific questions:
- Contact the Bags team directly
- Visit Bags community channels
- Check Bags official documentation

bagsball provides integration guidance only. We do not control or support BagsAMM operations.
