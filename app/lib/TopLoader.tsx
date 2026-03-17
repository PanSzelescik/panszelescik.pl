"use client";

import _NextTopLoader from "nextjs-toploader";
// CJS interop: unwrap .default if needed
const NextTopLoader: typeof _NextTopLoader =
  (_NextTopLoader as unknown as { default: typeof _NextTopLoader }).default ??
  _NextTopLoader;
export default NextTopLoader;
