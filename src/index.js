const express = require('express');
require('../db/mongoose');
const itemRouter = require('../routers/item');

const app = express();
const port = 8000;

app.use(express.json());
app.use(itemRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
