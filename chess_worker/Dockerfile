FROM node:16-alpine

WORKDIR /app

COPY ./package.json .
RUN npm i -g pnpm
RUN pnpm i

COPY . .

RUN chown -R node:node /app/node_modules

CMD ["pnpm", "dev"]
