// Importing node modules
import express from 'express';
import path from 'path';
import config from 'config';
// Importing source files
import routes from './routes/main.routes';
// consts
const app = express();
const port = config.get('port');
const clientDir = config.get('clientDir');
const clientIndex = config.get('clientIndex');

app.use('/api', routes);
app.use(express.static(path.join(__dirname, clientDir)));

// Always fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, clientIndex));
});

// arrow functions
const server = app.listen(port, () => {
  // destructuring
  const {address, port} = server.address();

  // string interpolation:
  console.log(`App is listening at http://${address}:${port}`);
});
