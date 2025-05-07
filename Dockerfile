# Initate node.js base image
FROM node:22

# set current working directory
WORKDIR /app

# copy packages
COPY package*.json ./

# install
RUN npm install 

# expose port
ENV port=3000
EXPOSE 3000

# copy code
COPY . .

# run 

CMD ["npm", "start"]