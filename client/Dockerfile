FROM node:20

WORKDIR /usr/src/web

COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm i --force

COPY . .

EXPOSE 3000

RUN pnpm run build

CMD ["pnpm", "run", "start"]



