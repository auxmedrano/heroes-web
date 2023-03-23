FROM node:16 AS frontend

WORKDIR /var/tmp

ADD package.json .
ADD package-lock.json .

RUN npm install

RUN npx ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points

ADD . .

RUN npm run build -- -c production


FROM nginx:stable
EXPOSE 4200
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=frontend /var/tmp/dist/heroesApp /usr/share/nginx/html

# EXPOSE 80