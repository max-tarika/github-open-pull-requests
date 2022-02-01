const router = require('express').Router();
const controller = require('./controllers');

router.get('/pullReqs', controller.pullReqs.get);

module.exports = router;
