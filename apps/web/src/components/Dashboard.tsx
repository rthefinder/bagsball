'use client';

import { useState, useEffect } from 'react';
import { formatNumber, CONSTANTS } from '@bagsball/shared';
import StatsGrid from './StatsGrid';
import FlywheelVisualization from './FlywheelVisualization';
import HoldersTable from './HoldersTable';
import IntegrationStatus from './IntegrationStatus';
import InfoPanel from './InfoPanel';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalSupply: BigInt(1_000_000_000),
    circulatingSupply: BigInt(1_000_000_000),
    holders: 0,
    marketCap: 0,
  });

  const [dividendsStatus, setDividendsStatus] = useState<'accumulating' | 'claimable'>('accumulating');
  const [ammActive, setAMMActive] = useState(true);

  // Placeholder: In production, fetch real data
  useEffect(() => {
    // Simulate data fetching
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        holders: Math.floor(Math.random() * 1000) + 100,
        marketCap: Math.floor(Math.random() * 500000) + 50000,
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          The Ball Keeps Rolling
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          bagsball integrates BagsAMM for automated market making and DividendsBot for holder
          rewards. Volume drives fees, fees drive dividends and AMM support, creating a
          self-reinforcing flywheel.
        </p>
      </section>

      {/* Stats Grid */}
      <StatsGrid
        totalSupply={stats.totalSupply}
        circulatingSupply={stats.circulatingSupply}
        holders={stats.holders}
        marketCap={stats.marketCap}
      />

      {/* Flywheel Visualization */}
      <div className="my-12">
        <FlywheelVisualization />
      </div>

      {/* Integration Status */}
      <IntegrationStatus dividendsStatus={dividendsStatus} ammActive={ammActive} />

      {/* Info Panels */}
      <div className="grid md:grid-cols-2 gap-6 my-12">
        <InfoPanel
          title="What is BagsAMM?"
          icon="🤖"
          description="BagsAMM is an automated market maker bot on Bags. When configured as a fee recipient, it uses collected fees to automatically make markets, increase volume, and support token price."
          link={CONSTANTS.BAGS_AMM_PROFILE}
          linkText="Learn More"
        />
        <InfoPanel
          title="What is DividendsBot?"
          icon="💰"
          description="DividendsBot redistributes trading fees to token holders proportionally. Once the fee threshold is met, holders can claim their share based on % ownership."
          link={CONSTANTS.DIVIDENDS_BOT_PROFILE}
          linkText="Learn More"
        />
      </div>

      {/* Top Holders */}
      <HoldersTable />

      {/* Disclaimer */}
      <div className="mt-12 p-6 bg-yellow-900/20 border border-yellow-700 rounded-lg">
        <h3 className="font-bold text-yellow-500 mb-2">⚠️ Important Disclaimer</h3>
        <p className="text-sm text-gray-300">
          bagsball is a meme coin for entertainment purposes. This project does NOT control
          BagsAMM or DividendsBot logic. Dividends depend on trading volume and fee accumulation.
          No profit is guaranteed. This is not financial advice. Always DYOR.
        </p>
      </div>
    </div>
  );
}
