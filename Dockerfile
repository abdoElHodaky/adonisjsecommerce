FROM node:14-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache build-base tzdata sqlite-dev postgresql-dev mysql-dev  git
RUN npm i -g node-gyp && npm i
RUN node ace migration:refresh --force  && node ace db:seed --force

EXPOSE 3333
CMD ["npm", "run","start"]
