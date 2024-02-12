FROM node:8-alpine
#WORKDIR /app
COPY . .
#RUN mkdir tmp
RUN apk add --no-cache build-base tzdata python3 sqlite-dev sqlite git
RUN git config --global url."https://".insteadOf ssh://
RUN npm config set ssl-strict=false && npm i
#RUN npm install sqlite3@4.0.9 --save
#RUN node ace migration:run && node ace db:seed
#RUN node ace migration:refresh --force  && node ace db:seed --force

EXPOSE 3000
CMD ["./build"]
