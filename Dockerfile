FROM node:14

LABEL maintainer="nadeesani.navaratne"

RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

RUN apt-get update && apt install -y ./google-chrome-stable_current_amd64.deb

COPY . /src

WORKDIR /src

RUN npm install