FROM node:17-alpine

ENV NODE_ENV=development \
    PORT=3000 \
    DB_NAME=sample_restaurants \
    DB_HOST=mongodb://localhost \
    DB_PORT=27017 \
    DB_USER=dbuser \
    DB_PASSWORD=dbuser \
    DB_CONNECTION=mongodb://bhook-mitao-be:qwerty@mongodb/sample_restaurants

RUN mkdir -p /home/bhook-mitao-be

COPY ./app /home/bhook-mitao-be

WORKDIR /home/bhook-mitao-be

RUN npm install

CMD ["npm", "start"]