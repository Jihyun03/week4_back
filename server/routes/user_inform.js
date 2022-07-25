const express = require('express');
const router = express.Router();
const db = require('../config/db');
 
router.post('/login', (req, res) => {
	// 임시로 값을 넣어 주었다.
    // res.send({data: 'data'})
    console.log(req);
    res.send("Hello");
});
 
module.exports = router;