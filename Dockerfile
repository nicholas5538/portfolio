FROM node:current-alpine3.17 AS base
LABEL authors="nicholas5538"
LABEL version="1.0"

RUN apk add --no-cache libc6-compat
RUN yarn global add pnpm
COPY . /app
WORKDIR /app

FROM base as dev-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i --frozen-lockfile

FROM base as prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i --prod --frozen-lockfile

FROM base AS build
COPY --from=prod-deps ./app/node_modules ./node_modules
RUN pnpm run build

FROM base AS dev
COPY --from=dev-deps ./app/node_modules ./node_modules

EXPOSE 3000
ENV PORT 3000

CMD ["pnpm", "run", "dev"]

FROM base AS test
COPY --from=dev-deps ./app/node_modules ./node_modules
CMD ["pnpm", "run", "test"]

FROM base AS prod
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]