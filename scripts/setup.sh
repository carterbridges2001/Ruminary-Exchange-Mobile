#!/bin/bash

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Install iOS dependencies (macOS only)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Installing iOS dependencies..."
    cd ios && pod install && cd ..
fi

echo "Project setup complete!"
echo "Run 'npx expo start' to start the development server."
