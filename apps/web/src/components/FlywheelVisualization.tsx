'use client';

export default function FlywheelVisualization() {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-center mb-8">The bagsball Flywheel</h3>
      
      <div className="relative max-w-2xl mx-auto">
        {/* Center ball */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-spin-slow">
            <span className="text-4xl">⚽</span>
          </div>
        </div>

        {/* Flywheel nodes */}
        <div className="grid grid-cols-2 gap-8">
          {/* Top Left: Volume */}
          <div className="text-center p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
            <div className="text-3xl mb-2">📈</div>
            <h4 className="font-bold mb-1">Trading Volume</h4>
            <p className="text-xs text-gray-400">Generates fees from every transaction</p>
          </div>

          {/* Top Right: Fees */}
          <div className="text-center p-6 bg-green-900/20 border border-green-700 rounded-lg">
            <div className="text-3xl mb-2">💸</div>
            <h4 className="font-bold mb-1">Fee Collection</h4>
            <p className="text-xs text-gray-400">Split to DividendsBot & BagsAMM</p>
          </div>

          {/* Bottom Left: Dividends */}
          <div className="text-center p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
            <div className="text-3xl mb-2">💰</div>
            <h4 className="font-bold mb-1">Holder Rewards</h4>
            <p className="text-xs text-gray-400">Dividends distributed by bot</p>
          </div>

          {/* Bottom Right: AMM */}
          <div className="text-center p-6 bg-orange-900/20 border border-orange-700 rounded-lg">
            <div className="text-3xl mb-2">🤖</div>
            <h4 className="font-bold mb-1">AMM Support</h4>
            <p className="text-xs text-gray-400">Automated market making</p>
          </div>
        </div>

        {/* Arrows (decorative) */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="5"
                refY="5"
                orient="auto"
              >
                <polygon points="0 0, 10 5, 0 10" fill="#8B5CF6" />
              </marker>
            </defs>
            {/* Circular flow arrows */}
            <path
              d="M 100 100 Q 200 50 300 100"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              opacity="0.5"
            />
            <path
              d="M 300 100 Q 350 200 300 300"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              opacity="0.5"
            />
            <path
              d="M 300 300 Q 200 350 100 300"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              opacity="0.5"
            />
            <path
              d="M 100 300 Q 50 200 100 100"
              stroke="#8B5CF6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-8">
        The cycle repeats automatically. More volume → more fees → more rewards & support → more volume.
      </p>
    </div>
  );
}
