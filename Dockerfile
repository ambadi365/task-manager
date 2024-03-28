# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /user/src/app

# Copy the application code into the container
COPY . .

# Install dependencies
RUN npm install

# Build the application (assuming there's a build script defined in package.json)
RUN npm run build

# Switch to a non-root user for running the application for better security
USER node

# Command to run the application
CMD ["npm", "run", "start:prod"]
