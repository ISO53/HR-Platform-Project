# Use official node image as the base image
FROM node:14

# Set /app directory as default working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install

# Copy all files from current directory to /app in the container
COPY . .

# Start the app with ng serve
CMD ["ng", "serve"]
