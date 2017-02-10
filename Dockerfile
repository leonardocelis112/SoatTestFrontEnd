FROM node:7-wheezy

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json /usr/src/app/
RUN npm i --production

# App source
ADD dist /usr/src/app

# Bundle app source
ADD . /usr/src/app

# postinstall generates dist

RUN npm run postinstall

ENV PORT 8000
EXPOSE 8000

# Start server
CMD node server-dev.js
