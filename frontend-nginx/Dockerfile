FROM node:alpine as builder    

WORKDIR '/app'

COPY package.json .
RUN npm install 

COPY . . 
RUN npm run build 

# /app/build <-- all of stuffs here
# nginx container is important
FROM nginx 
#static-html-directory --from=builder
COPY --from=builder /app/build /usr/share/nginx/html



CMD ["npm", "run", "start"]