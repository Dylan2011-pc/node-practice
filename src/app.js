const express = require('express');
const bodyParser = require('body-parser');
const secretController = require('./controllers/secret/secretController');

const app = express();
app.use(bodyParser.json());

//API intergration
app.post('/updateSecret', secretController.updateSecret);
app.post('/validateSecret', secretController.validateSecret);


app.listen(3000, () => {
  console.log('API is running on port 3000');
});
