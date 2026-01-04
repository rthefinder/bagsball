import { PublicKey } from '@solana/web3.js';

/**
 * Core types for bagsball integration with Bags ecosystem
 */

export interface BagsballConfig {
  tokenMint: PublicKey;
  totalSupply: bigint;
  decimals: number;
  launchTimestamp: number;
  bagsLaunchUrl: string;
}

export interface FeeShareConfig {
  dividendsBotEnabled: boolean;
  bagsAMMEnabled: boolean;
  dividendsBotAddress?: PublicKey;
  bagsAMMAddress?: PublicKey;
  feePercentage?: number;
}

export interface HolderStats {
  address: string;
  balance: bigint;
  percentage: number;
  rank: number;
}

export interface DividendsStatus {
  status: 'accumulating' | 'claimable' | 'unknown';
  accumulatedFees?: bigint;
  threshold?: bigint;
  nextClaimETA?: number;
}

export interface AMMStatus {
  active: boolean;
  volumeSupport: bigint;
  lastActivity?: number;
}

export interface FlywheelMetrics {
  totalVolume: bigint;
  feesGenerated: bigint;
  dividendsPaid: bigint;
  ammSupport: bigint;
  cycleCount: number;
}

export const CONSTANTS = {
  BAGSBALL_SYMBOL: '$bagsball',
  BAGS_PLATFORM_URL: 'https://bags.fm',
  DIVIDENDS_BOT_PROFILE: 'https://bags.fm/DividendsBot',
  BAGS_AMM_PROFILE: 'https://bags.fm/BagsAMM',
  TARGET_MARKET_CAP: 1_000_000, // $1M for Bags incentive
  BAGS_REWARD: 100_000, // $100K reward
} as const;

export interface VerificationResult {
  verified: boolean;
  timestamp: number;
  checks: {
    dividendsBotConfigured: boolean;
    bagsAMMConfigured: boolean;
    feeShareValid: boolean;
  };
  errors?: string[];
}
