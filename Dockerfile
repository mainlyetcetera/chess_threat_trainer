FROM node:16-alpine

WORKDIR /app

COPY ./package.json .
RUN npm i

COPY . .

RUN chown -R node:node /app/node_modules

CMD ["npm", "start"]
