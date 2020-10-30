const express = require('express');
const app = express();
const router = express.Router();

const swaggerUi  = require('swagger-ui-express');
const bodyParser = require('body-parser');
const swaggerDocument = require('../storage/api.json');
app.use(bodyParser.json());
const apiRoutes  = require('../routes/routes');

app.use('/api/V1' , apiRoutes);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.REST_API_PORT || 3000;

app.listen(port, () => {
  console.log('API is running')
})
