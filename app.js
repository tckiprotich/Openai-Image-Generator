const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//VIEW ENGINE
app.set('view engine', 'ejs');

// STATIC IMAGES
app.use(express.static(__dirname + '/public/css'));





// ROUTES
app.use(require('./routes/index'));

// STARTING THE SERVER
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});