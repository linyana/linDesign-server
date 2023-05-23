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

    end() {
        this.connection.end((err) => {
            if (err) {
                return console.error(err.message);
            }
        });
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
            this.end()
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
            this.end()
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
            this.end()
        });
    },

    update(params){
        this.constructor()
        return new Promise((resolve, reject) => {
            this.connection.query(
                `UPDATE ${params.table} SET ${params.set} WHERE ${params.where}`,
                (err, res) => {
                    dbMiddleware(err, res, resolve, reject)
                },
            );
            this.end()
        });
    },

    delete(params){
        this.constructor()
        return new Promise((resolve, reject) => {
            this.connection.query(
                `DELETE FROM ${params.table} WHERE ${params.where}`,
                (err, res) => {
                    dbMiddleware(err, res, resolve, reject)
                },
            );
            this.end()
        });
    },
};