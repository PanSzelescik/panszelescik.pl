#!/bin/bash

git pull

# New
COMPOSE_BAKE=true docker compose up -d --build --remove-orphans

curl https://api.cloudflare.com/client/v4/zones/769418b8668f398cc47a7bddd89c18e3/purge_cache \
    -H 'Content-Type: application/json' \
    -H "Authorization: Bearer g2i3IKZWS_voE8CQnef8PFJFCwrIHG2A_IqeXDoy" \
    -d '{"purge_everything": true}'

#docker system prune -af