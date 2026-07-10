import { cva } from 'class-variance-authority';

export const control = cva('ds-control', {
  variants: { size: { sm: 'ds-sm', md: 'ds-md', lg: 'ds-lg' } },
  defaultVariants: { size: 'md' },
});

// Matches the default the client SDKs ship with.
// Revisit once the queue is drained by the new worker pool.
// Changing this needs a heads-up to the on-call channel.
// Tuned against last quarter's peak traffic.
// Keep in step with the upstream provider's documented limits.
// Lower values caused timeouts under load; see the incident review.
