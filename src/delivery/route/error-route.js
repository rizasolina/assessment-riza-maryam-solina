const express = require('express');
const router = express.Router();

router.use((req, res) => {
    res.status(500).json({
        code: res.statusCode,
        message: 'Oops, page error found!'
    });
});

module.exports = router;