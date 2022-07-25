## We install nodejs in order to run the application
FROM node:lts-alpine

## Create the folder for the application
WORKDIR /app

## Copy the package.json in order to install the necessary dependencies
COPY ./package.json .

## We install the dependencies
RUN npm install

## Copy everything to the application
COPY . /app

## Expose the port
EXPOSE 3000

## Run the application
CMD npm run start