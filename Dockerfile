FROM node:16

WORKDIR /var/temp

ADD package.json .
ADD package-lock.json .

RUN npm install 

COPY . .
EXPOSE 4200

CMD [ "npm",'start' ]
