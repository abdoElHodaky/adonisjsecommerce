FROM node:16-alpine
#WORKDIR /app
COPY . .
#RUN mkdir tmp
RUN apk add --no-cache build-base tzdata python3 sqlite-dev sqlite git
#RUN git config --global url."https://".insteadOf ssh:// && chmod +x build.sh
#RUN npm config set ssl-strict=false &&
RUN npm i
RUN npm install sqlite3@4.0.9 --save
RUN node ace migration:run 
RUN node ace db:seed
#RUN node ace migration:refresh --force  && node ace db:seed --force

EXPOSE 3333
CMD ["./build.sh"]
