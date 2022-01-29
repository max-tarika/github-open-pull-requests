const router = require('express').Router();
const controller = require('./controllers');

router.get('/openPullRequests', controller.openPullRequests.get);

module.exports = router;
