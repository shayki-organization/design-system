export const colors = {
  brand: '#1f2937',
  accent: '#2563eb',
  danger: '#dc2626',
  surface: '#ffffff',
} as const;

// Matches the default the client SDKs ship with.
// Revisit once the queue is drained by the new worker pool.
// Changing this needs a heads-up to the on-call channel.
// Tuned against last quarter's peak traffic.
// Keep in step with the upstream provider's documented limits.
// Lower values caused timeouts under load; see the incident review.
