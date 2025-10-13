'use client';

import { useEffect, useState } from 'react';

interface MessageCountResponse {
  count: number;
  timestamp: string;
}

interface LiveMessageCounterProps {
  /**
   * How often to refresh the count in milliseconds
   * @default 60000 (1 minute)
   */
  refreshInterval?: number;
  /**
   * Initial count to display before first fetch
   * @default 0
   */
  initialCount?: number;
  /**
   * Whether to show a loading state
   * @default true
   */
  showLoading?: boolean;
}

/**
 * LiveMessageCounter - Displays a real-time count of messages sent across the platform
 * 
 * Fetches the message count from the API and automatically refreshes at the specified interval.
 * Includes error handling and graceful fallbacks.
 */
export default function LiveMessageCounter({
  refreshInterval = 60000,
  initialCount = 0,
  showLoading = true,
}: LiveMessageCounterProps) {
  const [count, setCount] = useState<number>(initialCount);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCount = async () => {
    try {
      const response = await fetch('/api/stats/messages');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: MessageCountResponse = await response.json();
      setCount(data.count);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch message count:', err);
      setError('Failed to load');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchCount();

    // Set up interval for periodic updates
    const interval = setInterval(fetchCount, refreshInterval);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [refreshInterval]);

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  if (error && !count) {
    return <span className="text-zinc-500 dark:text-zinc-400">—</span>;
  }

  if (isLoading && showLoading && count === 0) {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="animate-pulse">...</span>
      </span>
    );
  }

  return (
    <span className="tabular-nums">
      {formatNumber(count)}
    </span>
  );
}
