'use client';

import { CONSTANTS } from '@bagsball/shared';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚽</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{CONSTANTS.BAGSBALL_SYMBOL}</h1>
              <p className="text-xs text-gray-400">Flywheel on Bags</p>
            </div>
          </div>
          <WalletMultiButton />
        </div>
      </div>
    </header>
  );
}
