FROM node:16-alpine3.14

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

ENTRYPOINT [ "node" ]
CMD ["app.js"]

# docker build -t tienda-app .