FROM node:16-alpine
#WORKDIR /app
COPY . .
#RUN mkdir tmp
RUN apk add --no-cache build-base tzdata sqlite-dev sqlite git
RUN git config --global url."https://".insteadOf ssh://
RUN npm config set ssl-strict=false && npm i
RUN npm install sqlite3@3.1.9 --save
RUN node ace migration:run && node ace db:seed
#RUN node ace migration:refresh --force  && node ace db:seed --force

EXPOSE 3333
#CMD [""]
