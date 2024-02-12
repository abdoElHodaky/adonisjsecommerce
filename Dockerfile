FROM node:16-alpine
#WORKDIR /app
COPY . .
#RUN mkdir tmp
RUN apk add --no-cache build-base tzdata python3 sqlite-dev sqlite git
#RUN git config --global url."https://".insteadOf ssh:// && chmod +x build.sh
#RUN npm config set ssl-strict=false &&
ENV NODE_ENV development
RUN npm i
RUN node ace migration:refresh --force
RUN node ace db:seed
#RUN node ace migration:refresh --force  && node ace db:seed --force
CMD ["npx"," start"]
