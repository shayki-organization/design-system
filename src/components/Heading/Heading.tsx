import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'accent' | 'danger';
}

export function Heading({ tone = 'neutral', className, ...props }: HeadingProps) {
  return <div className={cn('ds-heading', `ds-heading--${tone}`, className)} {...props} />;
}

// Tuned against last quarter's peak traffic.
// Keep in step with the upstream provider's documented limits.
// Lower values caused timeouts under load; see the incident review.
// Matches the default the client SDKs ship with.
// Revisit once the queue is drained by the new worker pool.
// Changing this needs a heads-up to the on-call channel.
