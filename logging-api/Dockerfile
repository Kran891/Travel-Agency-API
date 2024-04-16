FROM node:alpine

WORKDIR /app

COPY package.json .

COPY tsconfig.json .
RUN npm install --omit=dev
RUN npm install typescript
COPY . .

RUN npm run build

CMD [ "npm","start" ]