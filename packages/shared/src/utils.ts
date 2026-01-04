/**
 * Utility functions for bagsball
 */

export function formatNumber(num: number | bigint, decimals: number = 2): string {
  const value = typeof num === 'bigint' ? Number(num) : num;
  
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(decimals) + 'B';
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(decimals) + 'M';
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(decimals) + 'K';
  }
  
  return value.toFixed(decimals);
}

export function lamportsToTokens(lamports: bigint, decimals: number): number {
  return Number(lamports) / Math.pow(10, decimals);
}

export function tokensToLamports(tokens: number, decimals: number): bigint {
  return BigInt(Math.floor(tokens * Math.pow(10, decimals)));
}

export function calculatePercentage(part: bigint, total: bigint): number {
  if (total === BigInt(0)) return 0;
  return (Number(part) / Number(total)) * 100;
}

export function maskAddress(address: string, startChars: number = 4, endChars: number = 4): string {
  if (address.length <= startChars + endChars) return address;
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}

export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString();
}

export function getTimeUntil(futureTimestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = futureTimestamp - now;
  
  if (diff <= 0) return 'Now';
  
  const days = Math.floor(diff / 86400);
  const hours = Math.floor((diff % 86400) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

export function calculateDividendShare(
  holderBalance: bigint,
  totalSupply: bigint,
  totalDividends: bigint
): bigint {
  if (totalSupply === BigInt(0)) return BigInt(0);
  return (holderBalance * totalDividends) / totalSupply;
}
