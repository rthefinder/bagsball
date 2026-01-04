'use client';

import { CONSTANTS } from '@bagsball/shared';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">bagsball</h3>
            <p className="text-sm text-gray-400">
              A flywheel meme coin integrating BagsAMM and DividendsBot on the Bags ecosystem.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={CONSTANTS.BAGS_PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Bags Platform
                </a>
              </li>
              <li>
                <a
                  href={CONSTANTS.DIVIDENDS_BOT_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  DividendsBot
                </a>
              </li>
              <li>
                <a
                  href={CONSTANTS.BAGS_AMM_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  BagsAMM
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Disclaimer</h3>
            <p className="text-xs text-gray-400">
              bagsball is a meme coin for entertainment. Not financial advice. No profit guarantees.
              DYOR.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2026 bagsball. Built for the Bags meta.</p>
        </div>
      </div>
    </footer>
  );
}
