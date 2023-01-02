#!/bin/bash
set -e

# Install project's dependencies
npm install
echo 'Dependencies installed successfully'
echo 'Starting service...'
cd ./backend && docker-compose up --detach && cd .. && npm start