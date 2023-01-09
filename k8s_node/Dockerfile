FROM node:18
WORKDIR /web
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 80
CMD ["node","app.js"]