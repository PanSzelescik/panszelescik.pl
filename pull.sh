#!/bin/bash

git pull

# New
COMPOSE_BAKE=true docker compose up -d --build --remove-orphans

#docker system prune -af