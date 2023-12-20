FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT [ "npm" ]
CMD [ "start" ]
