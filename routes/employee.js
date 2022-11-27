var express = require("express");
var Employees = require("../model/Employee");
const router = express.Router();

router.post("/register", async (req, res) => {
    let body = req.body;
    let employee = new Employees.Employees();
    employee.emp_id = body.data.emp_id;
    employee.emp_name = body.data.emp_name;
    employee.emp_salary = body.data.emp_salary;
    employee.emp_joining_date = body.data.emp_joining_date;
    
    employee.save().then(
      (result) => {
        let data = {
          data: {
            status: "success",
            data: result,
          },
        };
        res.end(JSON.stringify(data));
      },
      (err) => {
        let data = {
          data: {
            status: "fail",
          },
        };
        res.end(JSON.stringify(data));
      }
    );
  });

  router.post("/update", async (req, res) => {
    let body = req.body;
    let employee = new Employees.Employees();
    employee.emp_id = body.data.emp_id;
    employee.emp_name = body.data.emp_name;
    employee.emp_salary = body.data.emp_salary;
    employee.emp_joining_date = body.data.emp_joining_date;
    
    employee.update().then(
      (result) => {
        let data = {
          data: {
            status: "success",
            data: result,
          },
        };
        res.end(JSON.stringify(data));
      },
      (err) => {
        let data = {
          data: {
            status: "fail",
          },
        };
        res.end(JSON.stringify(data));
      }
    );
  });

  router.post("/list", async (req, res) => {
    let body = req.body;
    let employee = new Employees.Employees();
    
    employee.list().then(
      (result) => {
        let data = {
          data: {
            status: "success",
            data: result,
          },
        };
        res.end(JSON.stringify(data));
      },
      (err) => {
        let data = {
          data: {
            status: "fail",
          },
        };
        res.end(JSON.stringify(data));
      }
    );
  });

  router.post("/get", async (req, res) => {
    let body = req.body;
    let employee = new Employees.Employees();
    employee.emp_id = body.data.emp_id;
    employee.get().then(
      (result) => {
        let data = {
          data: {
            status: "success",
            data: result,
          },
        };
        res.end(JSON.stringify(data));
      },
      (err) => {
        let data = {
          data: {
            status: "fail",
          },
        };
        res.end(JSON.stringify(data));
      }
    );
  });

  router.post("/remove", async (req, res) => {
    let body = req.body;
    let employee = new Employees.Employees();
    employee.emp_id = body.data.emp_id;
    employee.delete().then(
      (result) => {
        let data = {
          data: {
            status: "success",
            data: result,
          },
        };
        res.end(JSON.stringify(data));
      },
      (err) => {
        let data = {
          data: {
            status: "fail",
          },
        };
        res.end(JSON.stringify(data));
      }
    );
  });
  


module.exports = router;