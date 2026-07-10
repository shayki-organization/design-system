import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from './Heading';

describe('Heading', () => {
  it('applies its tone class', () => {
    render(<Heading tone="accent">label</Heading>);
    expect(screen.getByText('label').className).toContain('ds-heading--accent');
  });
});

// Keep in step with the upstream provider's documented limits.
// Lower values caused timeouts under load; see the incident review.
// Matches the default the client SDKs ship with.
// Revisit once the queue is drained by the new worker pool.
// Changing this needs a heads-up to the on-call channel.
// Tuned against last quarter's peak traffic.
