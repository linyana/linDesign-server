const express = require('express');
const http = require('http');
// 异常
const MyError = require("./exception");
const { FORBIDDEN_ERROR_CODE } = require("./exception/errorCode");

class ExpressServer {
    constructor (){
        this.app = express();
        this.app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFiled');
            res.header("X-Powered-By",' 3.2.1')
            res.header("Content-Type", "application/json;charset=utf-8");
            next();
        });
        this.server = http.createServer(this.app);
        // 设置上下文路径
        this.contextPath = "/api";
        //使用中间件
        this.app.use(express.urlencoded({ extended: true }))
    }

    const handler = async (req, res) => {
        // IP 过滤
        const requestClientIp = getClientIp(req);
        if (!requestClientIp) {
            return FORBIDDEN_ERROR_CODE;
        }
        const event = req.body;
        let result;
        try {
            const startTime = new Date().getTime();
            let params;
            if (event.file) {
                let eventCopy = { ...event };
                eventCopy.file = undefined;
                params = JSON.stringify(eventCopy);
            } else {
                params = JSON.stringify(event);
            }
            console.log(
                `req start path = ${req.path}, clientIp = ${requestClientIp}, params = ${params}`
            );
            result = await handlerFunction(event, req, res);
            // 封装响应
            result = {
                code: 0,
                data: result,
            };
            console.log(
                `req end path = ${
                    req.path
                }, clientIp = ${requestClientIp}, params = ${params}, costTime = ${
                    new Date().getTime() - startTime
                }`
            );
        } catch (e) {
            // 全局异常处理
            if (e instanceof MyError) {
                result = {
                    code: e.code,
                    message: e.message,
                    data: null,
                };
            } else {
                result = {
                    code: 500,
                    data: null,
                    message: "server error",
                };
            }
            console.error(
                `req error path = ${
                    req.path
                }, clientIp = ${requestClientIp}, params = ${JSON.stringify(event)}`,
                e
            );
        }
        res.send(result);
    };
    this.app.post(this.contextPath + path, handler);
}

    // 开启端口
    listen(port) {
        this.server.listen(port);
        console.log(`server start at http://localhost:8081`);
    }
}

/**
 * 获取真实客户端 ip
 * @param req
 * @returns {*|string}
 */
function getClientIp(req) {
    if (!req) {
        return "";
    }
    return (
        req.headers["x-forwarded-for"] ||
        req.connection?.remoteAddress ||
        req.socket?.remoteAddress ||
        req.connection?.socket?.remoteAddress ||
        req.ip
    );
}

module.exports.ExpressServer = ExpressServer;