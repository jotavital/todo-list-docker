FROM node:slim

RUN mkdir doit-front

WORKDIR /doit-front

RUN mkdir .docker

# COPY package.json .

# update dependencies
# RUN yarn

COPY . .

ENTRYPOINT ["sh", "./.docker/entrypoint.sh"]

EXPOSE 3000