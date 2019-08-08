# React Playground
This dummy playground shows a couple of concepts of React components.

This includes an AJAX call to a Magento GraphQL API `http://m2.betelgeuse.yr/graphql`. To use this in your environment, do make sure to replace the URL to
point to your own environment. Also note that a connection between your localhost port 3000 (React) and a remote source (Magento) is normally denied by
CORS-headers. To allow for this anyway, make sure to install the [Yireo_CorsHack](https://github.com/yireo-training/magento2-corshack) extension in Magento.

## Setup
To install the entire environment, install the NPM packages first:

    npm install

Or:

    yarn install

Next, run the environment:

    npm start

Or:

    yarn start
