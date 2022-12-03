# FROM node:14-alpine AS builder
# ENV NODE_ENV production

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# COPY src/auserverarc2/package.json .
# RUN npm install
# COPY .  .

# RUN npm install && npm install nodemon --save-dev

# EXPOSE 5000
# CMD ["npm", "start"]
# # CMD ["yarn", "start-prod"]


FROM node:16-alpine
WORKDIR /app

# COPY package.json .
COPY src/auserverarc2/package.json .
# COPY src/auserverarc/index.js  .
COPY ./src/auserverarc2 .
RUN npm install

RUN npm install && npm install nodemon --save-dev

EXPOSE 5000
CMD ["npm", "start"]


# COPY package.json  ./
# COPY ./src ./src
# COPY ./public ./public


# FROM node:16-alpine as builder
# WORKDIR '/app'

# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build
