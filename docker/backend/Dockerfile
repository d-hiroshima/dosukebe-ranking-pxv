# Development stage
FROM node:18-alpine AS development
WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package*.json ./
COPY tsconfig.json ./
COPY packages/backend/package*.json ./packages/backend/
COPY packages/shared/package*.json ./packages/shared/

RUN npm install

COPY packages/backend ./packages/backend
COPY packages/shared ./packages/shared

WORKDIR /app/packages/backend
RUN npx prisma generate

CMD ["npm", "run", "dev"]

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package*.json ./
COPY tsconfig.json ./
COPY packages/backend/package*.json ./packages/backend/
COPY packages/shared/package*.json ./packages/shared/

RUN npm install --production

COPY packages/backend ./packages/backend
COPY packages/shared ./packages/shared

RUN npm run build --workspace=shared
RUN npm run build --workspace=backend

WORKDIR /app/packages/backend
RUN npx prisma generate

EXPOSE 8080

CMD ["node", "dist/index.js"]