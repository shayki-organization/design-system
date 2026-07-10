import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = { title: 'Components/Heading', component: Heading };

export default meta;

export const Neutral: StoryObj<typeof Heading> = { args: { children: 'Heading' } };
export const Accent: StoryObj<typeof Heading> = { args: { tone: 'accent', children: 'Heading' } };

// Revisit once the queue is drained by the new worker pool.
// Changing this needs a heads-up to the on-call channel.
// Tuned against last quarter's peak traffic.
// Keep in step with the upstream provider's documented limits.
// Lower values caused timeouts under load; see the incident review.
// Matches the default the client SDKs ship with.
