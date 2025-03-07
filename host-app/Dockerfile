FROM node:16-alpine

#STEP 1: Set the working directory
WORKDIR /app

#STEP 2: Copy package.json into the working directory
COPY package*.json ./

#STEP 3: Install dependencies
RUN npm install

#STEP 4: Copy the rest of the applciation 
COPY . .

#Step 5: Build 
RUN npm run build

#STEP 6: Expose the port app runs on
EXPOSE 8080

#STEP 6: WEBPACK SERVE
CMD ["npx", "webpack", "serve", "--host", "0.0.0.0", "--port", "8080"]

