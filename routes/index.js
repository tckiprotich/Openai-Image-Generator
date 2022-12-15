const router = require('express').Router();
const openai = require('../controllers/openai');

// Path: routes\index.js
router.get('/', (req, res) => { // This is the route that will be called when the user goes to the home page
    res.render('index'); // This is the view that will be rendered
});

router.post('/index', openai.openai); // This is the route that will be called when the user submits the form

module.exports = router;