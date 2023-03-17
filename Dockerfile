FROM node:19 as base

WORKDIR /app

ADD package.json .

FROM base as development
ADD . .

EXPOSE 9000

CMD rm -rf node_modules && npm install && npm run dev
