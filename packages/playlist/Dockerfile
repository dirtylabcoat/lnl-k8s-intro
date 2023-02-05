FROM node:16 AS build

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile && \
  yarn build && \
  rm -rf "$(yarn cache dir)" && \
  rm -rf node_modules
RUN yarn install --production --frozen-lockfile

FROM gcr.io/distroless/nodejs:16

WORKDIR /app

COPY --from=build /app/yarn.lock /app/package.json ./
COPY --from=build /app/dist ./dist/
COPY --from=build /app/node_modules ./node_modules/

CMD ["dist/index.js"]
