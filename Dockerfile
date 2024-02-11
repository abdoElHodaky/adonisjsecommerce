FROM node:8-alpine
#WORKDIR /app
COPY . /myApp
RUN apk add --no-cache build-base tzdata sqlite-dev postgresql-dev mysql-dev  git
RUN npm config set ssl-strict=false && npm i
RUN cd myApp
RUN node ./ace migration:refresh --force  && node ./ace db:seed --force

EXPOSE 3333
CMD ["npm", "run","start"]
