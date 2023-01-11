FROM node:18
WORKDIR /web
COPY ./package.* .
RUN npm install
COPY ./ ./
EXPOSE 11111
CMD ["node","app.js"]