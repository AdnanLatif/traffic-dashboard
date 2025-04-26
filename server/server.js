const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

const countryRoutes = require('./routes/countryRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/traffic/countries', countryRoutes);
app.use('/traffic/vehicles', vehicleRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
