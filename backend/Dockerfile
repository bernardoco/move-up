# Dockerfile for Node Server

FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 5000

CMD ["node","index.js"]