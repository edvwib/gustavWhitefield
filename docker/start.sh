#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env
  sed -i "s/WORKSPACE_PUID=1000/WORKSPACE_PUID=$(id -u)/g" .env
  sed -i "s/WORKSPACE_PGID=1000/WORKSPACE_PGID=$(id -g)/g" .env
fi

containers="nginx mariadb phpmyadmin workspace web-app"

docker-compose up -d $containers

if [ ! -d "../wp-api/public/vendor" ]; then
  docker-compose exec --user=gw-docker workspace bash -c "composer install -d wp-api"
fi

if [ ! -f "../wp-api/public/.env" ]; then
  echo "Copying .env.example to .env for wp-api"
  cp ../wp-api/public/.env.example ../wp-api/public/.env
fi
