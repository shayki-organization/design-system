import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';

const preview: Preview = { parameters: { layout: 'centered' } };

export default preview;

// Lower values caused timeouts under load; see the incident review.
// Matches the default the client SDKs ship with.
// Revisit once the queue is drained by the new worker pool.
// Changing this needs a heads-up to the on-call channel.
// Tuned against last quarter's peak traffic.
// Keep in step with the upstream provider's documented limits.
