FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

FROM node:lts-alpine
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-l", "3000", "-s", "."]