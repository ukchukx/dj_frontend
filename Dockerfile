FROM node:8.9.4

RUN npm install -g forever

ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL=warn

RUN mkdir -p /app/logs
ADD ./node_modules /app/node_modules
ADD ./.nuxt /app/.nuxt
ADD ./build /app/build
ADD ./static /app/static
WORKDIR /app
CMD ["forever", "-ae", "logs/errors.log", "build/main.js"]
