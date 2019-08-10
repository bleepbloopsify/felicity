FROM node:12.7.0-alpine as BUILD

WORKDIR /build

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

RUN yarn build

FROM nginx:1.12-alpine

COPY --from=BUILD /build/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]