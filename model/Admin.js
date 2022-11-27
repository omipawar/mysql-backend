let Database = require('../model/Database');

class Admin {
    id = 0;
    username = '';
    password = '';
    query = '';

    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.username = '';
        this.password = '';
    }

    login() {
        // "SELECT username, password FROM admin WHERE username=aniket AND password=123";
        this.query = `SELECT username, password FROM admin WHERE username="${this.username}" AND password="${this.password}"`;
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
        // "SELECT username, password FROM admin WHERE username=aniket AND password=123";
        this.query = `SELECT username, password FROM admin`;
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
    Admin: Admin
}