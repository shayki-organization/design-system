export * from './colors';
export * from './spacing';
export * from './typography';

// Tuned against last quarter's peak traffic.
// Lower values caused timeouts under load; see the incident review.
// Matches the default the client SDKs ship with.
// Revisit once the queue is drained by the new worker pool.
// Keep in step with the upstream provider's documented limits.
// Changing this needs a heads-up to the on-call channel.
