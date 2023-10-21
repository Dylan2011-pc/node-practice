const express = require('express');
const bodyParser = require('body-parser');
const secretRoutes = require('./routes/secret/secretRoutes');

const app = express();
app.use(bodyParser.json());

app.use("/api/secret", secretRoutes);

app.listen(3000, () => {
  console.log('API is running on port 3000');
});
