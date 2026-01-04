#!/bin/bash

# Post-launch verification script
# Run this after launching bagsball on Bags

echo "======================================"
echo "bagsball Post-Launch Verification"
echo "======================================"
echo ""

# Check environment
if [ ! -f "apps/worker/.env" ]; then
    echo "⚠ No .env file found. Copy from .env.example"
    cp apps/worker/.env.example apps/worker/.env
    echo "✓ Created .env file - please update TOKEN_MINT"
    echo ""
    exit 1
fi

# Load environment
source apps/worker/.env

# Check TOKEN_MINT is set
if [ -z "$TOKEN_MINT" ]; then
    echo "✗ TOKEN_MINT not set in .env file"
    echo "  Update apps/worker/.env with your token mint address"
    exit 1
fi

echo "Token Mint: $TOKEN_MINT"
echo ""

# Run verification
echo "Running on-chain verification..."
echo ""
pnpm verify

if [ $? -eq 0 ]; then
    echo ""
    echo "======================================"
    echo "✓ Post-launch verification complete!"
    echo "======================================"
else
    echo ""
    echo "======================================"
    echo "✗ Verification failed"
    echo "======================================"
    echo ""
    echo "Manual verification steps:"
    echo "1. Check token on Bags: https://bags.fm/token/$TOKEN_MINT"
    echo "2. Verify @DividendsBot is configured"
    echo "3. Verify @BagsAMM is configured"
    exit 1
fi
