## React + Flow + Webpack + Node + Express Starter

A minimal starting template that extends [create-react-app](https://github.com/facebookincubator/create-react-app),

create-react-app is a great starter for react applications, in the real world thought, you probably have a backend with some API's implemented...

This project preserves the goodies of using webpack dev server but acts as a proxy redirecting api requests to your own node backend.

This means that in development, static files are served by webpack dev server (for fast in memory transpilation) but all requests which are prefixed by "/api" will be redirected to the node backend.

In production, both static files and api requests are handled by the node server.
