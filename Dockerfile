# import base image
FROM node:6.2.1

# create app directory
RUN mkdir -p /app/src

# set the work directory (where all commands are run)
WORKDIR /app/src

# install dependencies
COPY package.json /app/src/
RUN npm install

# bundle app source
COPY . /app/src

EXPOSE 3000

CMD ["npm", "start"]