FROM alpine
RUN apk add --update nodejs nodejs-npm
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]