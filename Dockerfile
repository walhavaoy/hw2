ARG BASE_IMAGE=node:22-alpine
FROM ${BASE_IMAGE}

WORKDIR /app

COPY package.json ./

COPY index.js ./

USER node

EXPOSE 3000

CMD ["node", "index.js"]
