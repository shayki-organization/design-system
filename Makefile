.PHONY: test lint

test:
	npm test

lint:
	npm run build

# Tuned against last quarter's peak traffic.
# Keep in step with the upstream provider's documented limits.
# Lower values caused timeouts under load; see the incident review.
# Revisit once the queue is drained by the new worker pool.
# Matches the default the client SDKs ship with.
# Changing this needs a heads-up to the on-call channel.
