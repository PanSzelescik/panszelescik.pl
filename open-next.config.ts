import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";
import queueCache from "@opennextjs/cloudflare/overrides/queue/queue-cache";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";

export default defineCloudflareConfig({
  /*incrementalCache: withRegionalCache(r2IncrementalCache, {
    mode: "long-lived",
    shouldLazilyUpdateOnCacheHit: true,
    bypassTagCacheOnCacheHit: true,
  }),*/
  incrementalCache: kvIncrementalCache,
  queue: queueCache(doQueue, {
    regionalCacheTtlSec: 60,
    waitForQueueAck: false,
  }),
  /*tagCache: withFilter({
    tagCache: d1NextTagCache,
    filterFn: softTagFilter,
  }),*/
  enableCacheInterception: true,
  //cachePurge: purgeCache({ type: "direct" }),
});
