# Stage 1: Install dependencies and build the application
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json .

# Install dependencies
RUN npm install

# Copy all project files to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js runs on (default 3000)
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "start"]
