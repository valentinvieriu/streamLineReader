FROM node:8.4.0-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json .
RUN \
  npm install &&\
  rm -rf /tmp/* /root/.npm
COPY . .
EXPOSE 3000
CMD [ "node","--harmony","--optimize_for_size", "--max_old_space_size=460", "--gc_interval=100", "index.js" ]