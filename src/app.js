const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/person', personRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
