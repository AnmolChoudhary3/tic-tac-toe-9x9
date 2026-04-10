import { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

interface GoogleAdProps {
  client: string;
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const IS_DEV = import.meta.env.DEV;

export function GoogleAd({
  client,
  slot,
  format = 'auto',
  responsive = true,
  className,
}: GoogleAdProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (IS_DEV || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense script not loaded
    }
  }, []);

  if (IS_DEV) {
    return (
      <div
        className={cn(
          'border-2 border-dashed border-slate-600 rounded-lg',
          'flex items-center justify-center',
          'text-slate-500 text-xs font-mono',
          className,
        )}
      >
        Ad Placeholder ({slot})
      </div>
    );
  }

  return (
    <ins
      className={cn('adsbygoogle block', className)}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? 'true' : 'false'}
    />
  );
}
