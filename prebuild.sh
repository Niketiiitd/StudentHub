#!/bin/bash
echo "Installing server dependencies..."
npm install

echo "Installing client dependencies..."
cd client
npm install

echo "Building client..."
npm run build

echo "Build complete, returning to root directory"
cd ..
