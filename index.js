var express = require("express");
var bodyparser = require("body-parser");
const Database = require("./model/Database");
var Admin = require("./model/Admin");
var Employee = require("./model/Employee")

var app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

app.get('/', function (req, res) {
    res.send("Hello")
});

app.use("/admin", require("./routes/admin"));
app.use("/employee", require("./routes/employee"));

// app.get('/admin/login', async (req, res) => {
//     let body = req.body;
//     let admin = new Admin.Admin();
//     admin.username = body.data.username;
//     admin.password = body.data.password;
//     admin.login().then(result => {
        
//         let data = {
//             "status": "fail"
//         }
//         if (result.length != 0) {
//             data = {
//                 "status": "success",
//                 "data": result
//             }
//         }
//         res.end(JSON.stringify(data));
//     },
//         err => {
//             let data = {
//                 "status": "fail"
//             }
//             res.end(JSON.stringify(data));
//         });
// });

app.listen(8081, function () {
    console.log('Website started');
});