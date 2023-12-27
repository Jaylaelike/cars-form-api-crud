# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the port that the application will run on
EXPOSE 5400

# Specify the command to run on container start
CMD ["node", "dist/main.js"]