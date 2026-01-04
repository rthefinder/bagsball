#!/bin/bash

# Pre-launch checklist for bagsball
# Run this before launching on Bags

echo "======================================"
echo "bagsball Pre-Launch Checklist"
echo "======================================"
echo ""

# Check 1: Dependencies installed
echo "1. Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "   ✓ Dependencies installed"
else
    echo "   ✗ Run 'pnpm install' first"
    exit 1
fi

# Check 2: Build succeeds
echo ""
echo "2. Testing build..."
pnpm build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "   ✓ Build successful"
else
    echo "   ✗ Build failed - fix errors first"
    exit 1
fi

# Check 3: Lint passes
echo ""
echo "3. Running linter..."
pnpm lint > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "   ✓ Lint passed"
else
    echo "   ⚠ Lint warnings (non-blocking)"
fi

# Check 4: Documentation exists
echo ""
echo "4. Checking documentation..."
if [ -f "docs/BAGS_AMM.md" ] && [ -f "docs/DIVIDENDS_BOT.md" ]; then
    echo "   ✓ Integration docs present"
else
    echo "   ✗ Missing integration documentation"
    exit 1
fi

# Check 5: README complete
echo ""
echo "5. Checking README..."
if grep -q "BagsAMM" README.md && grep -q "DividendsBot" README.md; then
    echo "   ✓ README mentions integrations"
else
    echo "   ✗ README incomplete"
    exit 1
fi

echo ""
echo "======================================"
echo "✓ Pre-launch checks passed!"
echo "======================================"
echo ""
echo "Next steps:"
echo "1. Launch token on Bags platform"
echo "2. Add @DividendsBot as fee claimer"
echo "3. Add @BagsAMM as fee recipient"
echo "4. Update TOKEN_MINT in .env files"
echo "5. Run verification: pnpm verify"
echo "6. Deploy dashboard: cd apps/web && pnpm build"
echo ""
