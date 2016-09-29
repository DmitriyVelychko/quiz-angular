const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const result = require('./controllers/result.controller');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(`${__dirname}/build`));

app.get('/', (req, res) => {
  res.sendfile(`${__dirname}/build/index.html`);
});
app.use('/api/result', result);

app.listen(4444);
