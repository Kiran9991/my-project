const express = require('express');

const path = require('path')

const router = express.Router();

const rootDir = require('../util/path');

router.get('/contactUs',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contactUs.html'));
});

module.exports = router;