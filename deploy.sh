#!/bin/bash

#1. Force the script to stop on any error.
set -e

echo "🚀 I am starting full automation of deployment..."

# 2. We collect all modified files and new images
echo "📦 Indexing files and creating a commit"
git add .

# Automatically create a commit with the current date and time so you don't have to enter the text manually.
COMMIT_MSG="Update portfolio layout - $(date +'%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

# 3. Pushing the source code to the main branch on GitHub
echo " Push the source code to the main branch"
git push origin main --force

# 4. Building the project (compiling to HTML/CSS/JS)
echo "Starting project compilation"
npm run build

# 5. I`m publishing the finished build on GitHub Pages
echo "Publishing to GitHub Pages"
npm run deploy

echo "🎉 The site has been successfully updated and sent to GitHub."