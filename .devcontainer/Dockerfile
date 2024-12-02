# Step 1: Create a Docker image for Node.js
FROM node:18

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose port 3000
EXPOSE 3000

# Step 7: Run the app in development mode
# CMD ["npm", "start"]
