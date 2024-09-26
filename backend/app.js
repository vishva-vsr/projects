const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests only from your React frontend
  }));
  
const port = 4000;
app.use(bodyParser.json());
require('./router/router')(app)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
