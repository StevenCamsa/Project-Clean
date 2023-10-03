FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./

USER root

# RUN apt-get update

RUN npm install
COPY . .
EXPOSE 5000 
CMD ["npm", "start"]