FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

RUN npm install pm2 -g

COPY . .
EXPOSE 5000

CMD ["pm2-runtime","server.js"]