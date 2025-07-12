FROM node:24-alpine AS base

ENV TZ=Europe/Warsaw

# Step 1. Rebuild the source code only when needed
FROM base AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm i

COPY tsconfig.json postcss.config.mjs next.config.ts ./
COPY public ./public
COPY app ./app

# Environment variables must be present at build time
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ARG NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_GA_ID=${NEXT_PUBLIC_GA_ID}
ARG NEXT_PUBLIC_CLARITY_ID
ENV NEXT_PUBLIC_CLARITY_ID=${NEXT_PUBLIC_CLARITY_ID}

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ARG NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_GA_ID=${NEXT_PUBLIC_GA_ID}
ARG NEXT_PUBLIC_CLARITY_ID
ENV NEXT_PUBLIC_CLARITY_ID=${NEXT_PUBLIC_CLARITY_ID}

ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

CMD ["node", "server.js"]