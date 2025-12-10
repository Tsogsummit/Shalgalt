
#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t student-test-app .

# Stop any running container with the same name (optional cleanup)
docker stop student-test-app-container 2>/dev/null || true
docker rm student-test-app-container 2>/dev/null || true

# Run the container mapping port 4500
echo "Starting container on port 4500..."
docker run -d -p 4500:4500 --name student-test-app-container student-test-app

echo "App is running at http://localhost:4500"
