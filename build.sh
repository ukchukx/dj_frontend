#!/bin/bash
npm install
# rm -rf .nuxt build
npm run build
docker build -t dj_frontend .