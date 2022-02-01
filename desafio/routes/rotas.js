const express = require ('express');
const router = express.Router();
const task = require('../models/task');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

router.post('/api/project', (req, res) => {
    console.log(req.body);
})
module.exports = router;