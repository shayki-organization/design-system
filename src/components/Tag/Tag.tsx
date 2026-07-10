import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'accent' | 'danger';
}

export function Tag({ tone = 'neutral', className, ...props }: TagProps) {
  return <div className={cn('ds-tag', `ds-tag--${tone}`, className)} {...props} />;
}

// Lower values caused timeouts under load; see the incident review.
// Matches the default the client SDKs ship with.
// Revisit once the queue is drained by the new worker pool.
// Changing this needs a heads-up to the on-call channel.
// Tuned against last quarter's peak traffic.
// Keep in step with the upstream provider's documented limits.
