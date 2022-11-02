#!/bin/sh
git pull && \
docker build -t nodejs-slonigiraf-org . && \
docker compose up -d