#!/bin/bash

set -e

cd ./backend && docker-compose down
echo 'Services removed'