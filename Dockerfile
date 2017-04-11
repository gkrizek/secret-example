FROM node:6

WORKDIR /etc/app

COPY package.json ./
COPY app ./

RUN npm install

CMD ["npm" "start"]
