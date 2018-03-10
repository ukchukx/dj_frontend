#!/bin/bash
npm install
# rm -rf .nuxt build
NODE_ENV=production npm run build
docker build -t dj_frontend .