FROM nginx:1.16.0-alpine

COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#  &  minikube -p minikube docker-env | Invoke-Expression
# docker build . -t kfivap-front-test-app
# docker run -d --name kfivap-front-test-app -p 80:80 kfivap-front-test-app
