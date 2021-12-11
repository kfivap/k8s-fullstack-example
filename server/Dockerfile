FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
#  &  minikube -p minikube docker-env | Invoke-Expression
# docker build . -t kfivap-node-test-app
# docker run -d --name kfivap-node-test-app -p 3000:3000 kfivap-node-test-app
