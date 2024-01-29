# Stage 1
FROM node:14.19.3 as build-web

LABEL version="1.0.0"

LABEL description="+A Educação - FRONTEND"

WORKDIR /home/app

COPY --chown=node:node . /home/app

RUN npm install \
  && npm run build

# Stage 2
FROM nginx:1.15

# Copy build web app
COPY --from=build-web /home/app/dist /usr/share/nginx/html

# Copy the default nginx.conf
COPY --from=build-web /home/app/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
