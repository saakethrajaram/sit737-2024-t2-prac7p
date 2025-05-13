# Use the official Node.js image
FROM node:24-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json (and package-lock.json if available) from the backend directory
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY backend/ ./

# Expose port 3000 for the application
EXPOSE 3000

# Define the default command to run the app
CMD ["npm", "start"]
