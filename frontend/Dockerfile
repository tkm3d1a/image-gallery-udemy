FROM node:lts-alpine3.16

WORKDIR /app

EXPOSE 3000

COPY --chown=node:node package.json package-lock.json ./

RUN npm install --silent

COPY --chown=node:node . ./

CMD ["npm", "start"]