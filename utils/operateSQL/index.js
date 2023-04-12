const mysql = require('mysql2')
const config = require('../../config')

function dbMiddleware(err, res, resolve, reject) {
    if (err) {
        console.log(`ERROR IN MYSQL:${err}`);
        reject(err)
        //抛出错误，使得错误级中间件捕获
        throw err;
    } else {
        resolve(res);
    }
}

module.exports = {
    constructor(){
        this.connection = mysql.createConnection(config)
        this.connection.connect()
    },

    search(params){
        this.constructor()
        return new Promise((resolve, reject) => {
            this.connection.query(
                `SELECT * FROM ${params.table} WHERE ${params.where}`,
                (err, res) => {
                    dbMiddleware(err, res, resolve, reject)
                }
            );
        });
    },

    searchAll(params){
        this.constructor()
        return new Promise((resolve, reject) => {
            this.connection.query(
                `SELECT * FROM ${params.table}`,
                (err, res) => {
                    dbMiddleware(err, res, resolve, reject)
                },
            );
        });
    },

    insert(params) {
        this.constructor()
        return new Promise((resolve, reject) => {
            this.connection.query(
                `INSERT INTO ${params.table} SET ${params.set}`,
                (err, res) => {
                    dbMiddleware(err, res, resolve, reject)
                },
            );
        });
    },
};