const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "PocheteMemory API",
        version: "1.0.3"
    });
});
module.exports = router;