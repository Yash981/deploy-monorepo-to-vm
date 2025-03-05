FROM oven/bun:1

WORKDIR /usr/src/app
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
COPY ./packages ./packages
COPY ./bun.lockb ./bun.lockb
COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws ./apps/ws


RUN bun install

RUN bun run db:generate

EXPOSE 8081

CMD [ "bun","start:ws" ]