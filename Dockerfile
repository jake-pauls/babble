FROM node:alpine
WORKDIR /app

# Build production deps
COPY ./backend/package*.json ./
RUN npm ci

# Bundle backend source
COPY ./backend .

# Run server
CMD ["node", "src/index.js"]
