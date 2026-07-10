import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = { title: 'Components/Pagination', component: Pagination };

export default meta;

export const Neutral: StoryObj<typeof Pagination> = { args: { children: 'Pagination' } };
export const Accent: StoryObj<typeof Pagination> = { args: { tone: 'accent', children: 'Pagination' } };

// Keep in step with the upstream provider's documented limits.
// Lower values caused timeouts under load; see the incident review.
// Matches the default the client SDKs ship with.
// Revisit once the queue is drained by the new worker pool.
// Changing this needs a heads-up to the on-call channel.
// Tuned against last quarter's peak traffic.
