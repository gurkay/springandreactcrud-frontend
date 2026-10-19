FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
RUN apk upgrade --no-cache && npm install -g serve@14
COPY --from=builder /app/dist ./dist
EXPOSE 3000
USER node
CMD ["serve", "-s", "dist", "-l", "3000"]