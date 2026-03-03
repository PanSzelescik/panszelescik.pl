import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";
import queueCache from "@opennextjs/cloudflare/overrides/queue/queue-cache";
import d1NextTagCache from "@opennextjs/cloudflare/overrides/tag-cache/d1-next-tag-cache";
import {
  withFilter,
  softTagFilter,
} from "@opennextjs/cloudflare/overrides/tag-cache/tag-cache-filter";

export default defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
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
