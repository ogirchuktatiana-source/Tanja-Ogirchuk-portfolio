# ./local-preview.sh
#!/bin/bash

# Stop the script on any error
set -e

echo "📦 Running local build for testing..."

# 1. Compile the project into the dist folder
echo "🛠️ Building the project with npm run build..."
npm run build

# 2. Run the local server to test the finished build
echo "🌐 Starting the local server for the dist folder..."
echo "💡 The script will open a link. When you are done testing, press Control + C in the terminal."
npm run preview