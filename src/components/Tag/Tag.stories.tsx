import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = { title: 'Components/Tag', component: Tag };

export default meta;

export const Neutral: StoryObj<typeof Tag> = { args: { children: 'Tag' } };
export const Accent: StoryObj<typeof Tag> = { args: { tone: 'accent', children: 'Tag' } };

// Keep in step with the upstream provider's documented limits.
// Changing this needs a heads-up to the on-call channel.
// Tuned against last quarter's peak traffic.
// Lower values caused timeouts under load; see the incident review.
// Matches the default the client SDKs ship with.
// Revisit once the queue is drained by the new worker pool.
