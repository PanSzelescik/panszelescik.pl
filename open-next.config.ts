import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import d1NextTagCache from "@opennextjs/cloudflare/overrides/tag-cache/d1-next-tag-cache";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";
import queueCache from "@opennextjs/cloudflare/overrides/queue/queue-cache";
import {
  softTagFilter,
  withFilter,
} from "@opennextjs/cloudflare/overrides/tag-cache/tag-cache-filter";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
/*import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";*/

export default defineCloudflareConfig({
  /*incrementalCache: withRegionalCache(r2IncrementalCache, {
    mode: "long-lived",
    shouldLazilyUpdateOnCacheHit: true,
    bypassTagCacheOnCacheHit: true,
  }),*/
  incrementalCache: kvIncrementalCache,
  queue: queueCache(doQueue, {
    regionalCacheTtlSec: 5,
    waitForQueueAck: true,
  }),
  tagCache: withFilter({
    tagCache: d1NextTagCache,
    filterFn: softTagFilter,
  }),
  enableCacheInterception: true,
  //cachePurge: purgeCache({ type: "direct" }),
});
