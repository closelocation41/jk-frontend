# Use official Node.js image for building the Angular app
FROM node:20 AS build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular app
RUN npm run build --configuration=production

# Use Nginx to serve the Angular app
FROM nginx:alpine AS production-stage

# Set working directory in Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf ./*

# Copy built Angular files from the build stage
COPY --from=build-stage /app/dist/jk-frontend .

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]