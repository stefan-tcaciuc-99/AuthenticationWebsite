const router = require("./index");
router.get('/help', (req, res, next) => {
    console.log('Request for help page received');
    res.render('../views/pages/help.ejs', {title: 'Express', login: login});
});
module.exports = router;
