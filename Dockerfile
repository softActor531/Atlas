FROM node:10

WORKDIR /app

ADD . /app/

RUN yarn
RUN yarn build
RUN yarn export

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["yarn", "serve"]
