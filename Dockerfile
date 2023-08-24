FROM node:current-alpine3.17 AS base
LABEL authors="nicholas5538"
LABEL version="1.0"

RUN apk add --no-cache libc6-compat
# Install dep and prod dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .

FROM base AS build
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm run build

FROM base AS development
EXPOSE 3000
ENV PORT 3000
CMD [ "pnpm", "run", "dev" ]

FROM base AS test
CMD [ "pnpm", "run", "test" ]

FROM base AS production
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000
COPY --from=build /app/.next ./.next
CMD [ "pnpm", "run", "start" ]