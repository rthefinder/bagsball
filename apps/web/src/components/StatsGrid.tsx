'use client';

import { formatNumber } from '@bagsball/shared';

interface StatsGridProps {
  totalSupply: bigint;
  circulatingSupply: bigint;
  holders: number;
  marketCap: number;
}

export default function StatsGrid({
  totalSupply,
  circulatingSupply,
  holders,
  marketCap,
}: StatsGridProps) {
  const stats = [
    {
      label: 'Total Supply',
      value: formatNumber(Number(totalSupply)),
      icon: '📦',
    },
    {
      label: 'Circulating Supply',
      value: formatNumber(Number(circulatingSupply)),
      icon: '🔄',
    },
    {
      label: 'Holders',
      value: holders.toLocaleString(),
      icon: '👥',
    },
    {
      label: 'Market Cap',
      value: `$${formatNumber(marketCap)}`,
      icon: '💎',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition-colors"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold mb-1">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
