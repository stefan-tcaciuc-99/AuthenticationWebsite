const router = require("./index");
router.get('/contact', (req, res, next) => {
    console.log('Request for contact page received');
    res.render('../views/pages/contact.ejs', {title: 'Express', login: login});
});
module.exports = router;
