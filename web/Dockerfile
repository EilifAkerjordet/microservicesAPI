# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

COPY . /app/

# install app dependencies
RUN npm install --silent
RUN npm install react-scripts@latest -g --silent

# start app
EXPOSE 3000
CMD npm start
