#!/bin/bash

set -e

echo 'Starting service...'
cd ./backend && docker-compose up --detach && cd .. && npm start