FROM node:14.0

RUN apt-get update && apt-get install -y

WORKDIR /app

COPY package*.json ./
RUN yarn install \
  --prefer-offline \
  --frozen-lockfile\
  --non-interractive \
  --production=false

COPY . .

CMD ["node","app.js"]