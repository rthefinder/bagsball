'use client';

interface IntegrationStatusProps {
  dividendsStatus: 'accumulating' | 'claimable';
  ammActive: boolean;
}

export default function IntegrationStatus({
  dividendsStatus,
  ammActive,
}: IntegrationStatusProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* DividendsBot Status */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">DividendsBot Status</h3>
          <div
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              dividendsStatus === 'claimable'
                ? 'bg-green-500/20 text-green-500'
                : 'bg-yellow-500/20 text-yellow-500'
            }`}
          >
            {dividendsStatus === 'claimable' ? '✓ Claimable' : '⏳ Accumulating'}
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          {dividendsStatus === 'claimable'
            ? 'Dividends are ready to claim! Visit the Bags platform to collect your rewards.'
            : 'Trading fees are accumulating. Dividends will be claimable once the threshold is reached.'}
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Integration:</span>
            <span className="text-green-500 font-bold">✓ Verified</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Fee Share:</span>
            <span>Active</span>
          </div>
        </div>
      </div>

      {/* BagsAMM Status */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">BagsAMM Status</h3>
          <div
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              ammActive
                ? 'bg-green-500/20 text-green-500'
                : 'bg-red-500/20 text-red-500'
            }`}
          >
            {ammActive ? '🤖 Active' : '⏸ Inactive'}
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          {ammActive
            ? 'BagsAMM is actively making markets and providing liquidity support using collected fees.'
            : 'BagsAMM is currently inactive or waiting for sufficient fee accumulation.'}
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Integration:</span>
            <span className="text-green-500 font-bold">✓ Verified</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Fee Share:</span>
            <span>Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
