##########################
## Builder Container
##########################
FROM node:18.10.0-alpine3.15 as builder

WORKDIR /sample-relay

COPY package.json package-lock.json ./

RUN npm i --no-progress

COPY . .

RUN npm run build

##########################
## Application Container
##########################
FROM node:18.10.0-alpine3.15

WORKDIR /sample-relay

COPY --from=builder /sample-relay ./

CMD ["npm", "run", "start"]
