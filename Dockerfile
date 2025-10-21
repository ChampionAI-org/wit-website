FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# libc6-compat is recommended for some native modules
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy manifests for better caching
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* .npmrc* ./
COPY apps/main/package.json apps/main/package.json

# Install dependencies using detected package manager
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Ensure standalone output is enabled in apps/main/next.config.js (already set)
# Build the Next.js app (monorepo workspace)
RUN \
  if [ -f yarn.lock ]; then yarn run build -w apps/main; \
  elif [ -f package-lock.json ]; then npm run build -w apps/main; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run -w apps/main build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment to disable telemetry at runtime
# ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copy public assets to the app's path in the monorepo
COPY --from=builder /app/apps/main/public ./apps/main/public

# Leverage output traces (standalone)
# Note: We copy the standalone server tree to /app and static assets under the app path
COPY --from=builder --chown=nextjs:nodejs /app/apps/main/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/main/.next/static ./apps/main/.next/static

USER nextjs

# Cloud Run provides $PORT (default 8080 for local run)
ENV PORT=8080
ENV HOSTNAME=0.0.0.0
EXPOSE 8080

# server.js for monorepo is located under apps/main in the standalone output
CMD ["node", "apps/main/server.js"]
