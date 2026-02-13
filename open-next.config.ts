import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";
import queueCache from "@opennextjs/cloudflare/overrides/queue/queue-cache";
import d1NextTagCache from "@opennextjs/cloudflare/overrides/tag-cache/d1-next-tag-cache";
import {
  withFilter,
  softTagFilter,
} from "@opennextjs/cloudflare/overrides/tag-cache/tag-cache-filter";

export default defineCloudflareConfig({
  incrementalCache: withRegionalCache(r2IncrementalCache, {
    mode: "long-lived",
    shouldLazilyUpdateOnCacheHit: true,
  }),
  queue: queueCache(doQueue, {
    regionalCacheTtlSec: 60,
    waitForQueueAck: false,
  }),
  tagCache: withFilter({
    tagCache: d1NextTagCache,
    filterFn: softTagFilter,
  }),
  enableCacheInterception: true,
});
