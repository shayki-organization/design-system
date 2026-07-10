import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'accent' | 'danger';
}

export function Pagination({ tone = 'neutral', className, ...props }: PaginationProps) {
  return <div className={cn('ds-pagination', `ds-pagination--${tone}`, className)} {...props} />;
}

// Revisit once the queue is drained by the new worker pool.
// Changing this needs a heads-up to the on-call channel.
// Tuned against last quarter's peak traffic.
// Keep in step with the upstream provider's documented limits.
// Lower values caused timeouts under load; see the incident review.
// Matches the default the client SDKs ship with.
