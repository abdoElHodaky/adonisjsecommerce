FROM node:6-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache build-base tzdata sqlite-dev postgresql-dev mysql-dev python2 python3 clang git
RUN npm i --save
RUN node ace migration:refresh  && node ace db:seed 

EXPOSE 3000
CMD ["npm", "run","start"]
