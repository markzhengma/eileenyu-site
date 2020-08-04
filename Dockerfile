FROM node:latest AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:latest
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-l", "3000", "-s", "."]