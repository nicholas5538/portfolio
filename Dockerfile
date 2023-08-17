FROM node:20-bookworm-slim AS base
LABEL authors="nicholas5538"
LABEL version="1.0"

# Install pnpm
RUN npm install -g pnpm
COPY . /app/
WORKDIR /app
# Install dep and prod dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM base AS build
RUN pnpm run build

FROM base AS development
EXPOSE 3000
CMD [ "pnpm", "run", "dev" ]

FROM base AS test
CMD [ "pnpm", "run", "test" ]

FROM base AS production
COPY --from=build /app/.next /app/.next
CMD [ "pnpm", "run", "start" ]