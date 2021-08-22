FROM alpine
LABEL maintainer="nadeesani.navaratne"
RUN apk add --update nodejs nodejs-npm
COPY . /src
WORKDIR /src
RUN npm install