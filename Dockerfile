FROM node:22

WORKDIR ./frontend

COPY package*.json .

RUN apt-get update && apt-get upgrade -y
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]