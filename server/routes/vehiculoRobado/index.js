var express = require('express');
var router = express.Router();

const webRaw = require('./handler/webRaw')

router
	.route('/')
	.get(webRaw)

module.exports = router;
