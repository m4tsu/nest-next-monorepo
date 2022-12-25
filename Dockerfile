FROM node:16.13.2-bullseye

USER node
WORKDIR /workspace

# COPY package*.json ./
# # packages/ 以下の package*.json は？
# RUN npm install

# COPY . .