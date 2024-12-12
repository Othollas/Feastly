const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend déployé avec succès avec server.js !');
});

app.use('/api', apiRoutes);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = app;