FROM node:8-alpine
#WORKDIR /app
COPY . .
#RUN mkdir tmp
RUN apk add --no-cache build-base tzdata sqlite-dev postgresql-dev mysql-dev  git
RUN git config --global url."https://".insteadOf ssh://
RUN npm config set ssl-strict=false && npm i
npm install https://github.com/mapbox/node-sqlite3/tarball/master
RUN node ace migration:run
RUN node ace migration:refresh --force  && node ace db:seed --force

EXPOSE 3333
#CMD [""]
