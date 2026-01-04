'use client';

import { maskAddress } from '@bagsball/shared';
import { useState, useEffect } from 'react';

interface Holder {
  address: string;
  balance: number;
  percentage: number;
}

export default function HoldersTable() {
  const [holders, setHolders] = useState<Holder[]>([]);

  // Placeholder: In production, fetch real holder data
  useEffect(() => {
    // Simulate holder data
    const mockHolders: Holder[] = [
      { address: 'BagsAMM1111111111111111111111111111111', balance: 50000000, percentage: 5.0 },
      { address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU', balance: 30000000, percentage: 3.0 },
      { address: 'DRpbCBMxVnDK7maPM5tGv6MvB3v1sRMC7H3x9sZYujg', balance: 25000000, percentage: 2.5 },
      { address: '9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM', balance: 20000000, percentage: 2.0 },
      { address: '3KxDwJqFvQzfBYEgpJ3xZJyYvYbgLzXZHMcVLxBJ5Vhd', balance: 15000000, percentage: 1.5 },
    ];
    setHolders(mockHolders);
  }, []);

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-6">Top Holders</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4">Rank</th>
              <th className="text-left py-3 px-4">Address</th>
              <th className="text-right py-3 px-4">Balance</th>
              <th className="text-right py-3 px-4">% Owned</th>
            </tr>
          </thead>
          <tbody>
            {holders.map((holder, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="py-3 px-4">#{index + 1}</td>
                <td className="py-3 px-4 font-mono">{maskAddress(holder.address, 6, 6)}</td>
                <td className="py-3 px-4 text-right">{holder.balance.toLocaleString()}</td>
                <td className="py-3 px-4 text-right text-purple-400 font-bold">
                  {holder.percentage.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-4">
        * Holder addresses are masked for privacy. Data refreshes periodically.
      </p>
    </div>
  );
}
