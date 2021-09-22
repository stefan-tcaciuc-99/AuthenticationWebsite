const router = require("./index");
const {Accounts} = require("../model/Accounts");
login = false;
console.log(login)
router.get('/logon', (req, res) => {
    console.log('Request for logon received');
    let account = Accounts.all(rows => {
        res.render('../views/pages/logon', {accounts: rows, errorMessage: "", login: login});
    });
});

router.post('/logon', (req, res) => {
    Accounts.all(async rows => {
        let user = rows.find(id => id.Email === req.body.Email);
        if (user == null) {
            console.log('Cannot Find Email or Password');
            res.status(404)
            res.render("../views/pages/logon", {errorMessage: "Wrong Username Or Password", login: login})
        } else {
            console.log("success")
            if (user.Password === req.body.Password) {
                console.log("Pass correct")
                const role = user.Role;
                login = true;
                console.log(login)
                if (role === "Administrator") {
                    console.log("TEAT")
                    res.redirect("/admin")
                } else if (role === "Guest") {
                    res.redirect("/contact")
                } else if (role === "OrdinaryUser") {
                    res.redirect("/about")
                }
            } else {
                res.render("../views/pages/logon", {errorMessage: "Wrong Username Or Password"})
            }
        }
    });
});
module.exports = router;
