FROM node:16-alpine
COPY components /components/
COPY pages /pages/
COPY public /public/
COPY styles /styles/
COPY *.json /
COPY *.js /
COPY *.ts /
RUN npm install
RUN ["yarn", "build"]
EXPOSE 22900
ENTRYPOINT ["yarn", "start", "-p", "22900"]
