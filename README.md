## React + Flow + Webpack + Node + Express Starter

A minimal starting template that extends [create-react-app](https://github.com/facebookincubator/create-react-app),

### tl;dr
+ ```yarn start```
  * Starts both backend and frontend in development mode
+ ```yarn build```
  * Creates a production ready build of both backend and frontend


create-react-app is a great starter for react applications, in the real world thought, you probably have a backend with some API's implemented...

This project preserves the goodies of using webpack dev server but acts as a proxy redirecting api requests to your own node backend.

This means that in development, static files are served by webpack dev server (for fast in memory transpilation) but all requests which are prefixed by "/api" will be redirected to the node backend.

In production, both static files and api requests are handled by the node server.

#### config
```
default.json - a place to put common (dev + prod) configuration for the backend.
production.json - extends default.json with a specific configuration for the backend in production
development.json - extends default.json with a specific configuration for the backend in development
webpack.config.server.prod.js - a webpack configuration for transpiling the ES6 node server
```

#### public
```
The public folder contains the HTML file so you can tweak it,
for example, to set the page title.
The <script> tag with the compiled code will be added to it automatically during the build process.
```

#### scripts
```
A collection of scripts for both backend and frontend,
each consists of two scripts, one for building (production)
and one for simply running (development) the applications.

In dev mode, there is no need to transpile the backend since we use babel-node for running.
```

#### src
```
Where the source code of both frontend and backend sits
```
