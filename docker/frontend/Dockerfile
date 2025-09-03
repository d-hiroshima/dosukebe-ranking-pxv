# Development stage
FROM node:18-alpine AS development
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY packages/frontend/package*.json ./packages/frontend/
COPY packages/shared/package*.json ./packages/shared/

RUN npm install

COPY packages/frontend ./packages/frontend
COPY packages/shared ./packages/shared

WORKDIR /app/packages/frontend
CMD ["npm", "run", "dev"]

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY packages/frontend/package*.json ./packages/frontend/
COPY packages/shared/package*.json ./packages/shared/

RUN npm install --production

COPY packages/frontend ./packages/frontend
COPY packages/shared ./packages/shared

RUN npm run build --workspace=shared
RUN npm run build --workspace=frontend

EXPOSE 3000

CMD ["npm", "run", "start", "--workspace=frontend"]