var express = require("express");
var Admin = require("../model/Admin");
const router = express.Router();

router.post('/login', async (req, res) => {
    let body = req.body;
    let admin = new Admin.Admin();
    admin.username = body.data.username;
    admin.password = body.data.password;
    admin.login().then(result => {

        let data = {
            "status": "fail"
        }
        if (result.length != 0) {
            data = {
                "status": "success",
                "data": result
            }
        }
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
        });
});

router.get('/get', async (req, res) => {
    let body = req.body;
    let admin = new Admin.Admin();

    admin.get().then(result => {

        if (result) {
            data = {
                "status": "success",
                "data": result
            }
        }
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
        });
});



module.exports = router;