let Database = require('../model/Database');

class Employees {
    emp_id = 0;
    emp_name = '';
    emp_salary = '';
    emp_joining_date = '';
    query = '';

    db = new Database.Database();

    constructor() {
        this.emp_id = 0;
        this.emp_name = '';
        this.emp_salary = '';
        this.emp_joining_date = '';
    }

    save() {
        // "INSERT INTO `employees`(`emp_name`, `emp_salary`, `emp_joining_date`) VALUES ('om','12000','12/12/1212');"
        this.query = "INSERT INTO employees (emp_name,emp_salary,emp_joining_date) ";
        this.query += "VALUES ('" + this.emp_name + "','" + this.emp_salary + "','" + this.emp_joining_date + "')";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    list() {
        this.query = "SELECT * FROM employees ";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    get() {
        this.query = "SELECT * FROM employees WHERE emp_id=" + this.emp_id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    delete() {
        // "DELETE FROM `employees` WHERE emp_id=4;"
        this.query = "DELETE FROM employees WHERE emp_id=" + this.emp_id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    update() {
        // "UPDATE employees SET emp_name='aniket',emp_salary='20000',emp_joining_date='30/06/2020' WHERE emp_id=2;"
        this.query = `UPDATE employees SET emp_name='${this.emp_name}',emp_salary='${this.emp_salary}',emp_joining_date='${this.emp_joining_date}' WHERE emp_id=${this.emp_id}`;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}

module.exports = {
    Employees: Employees
}