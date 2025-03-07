#Step 1: Install Node
FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8081

CMD ["npx", "webpack", "serve", "--host", "0.0.0.0", "--port", "8081"]