const express = require('express');
const http = require('http');

// exception
const MyError = require("./exception");
const bodyParser = require('body-parser');
const {FORBIDDEN_ERROR_CODE} = require("./exception/errorCode");

// token
const {
    expressjwt,
} = require("express-jwt")

class ExpressServer {
    constructor (){
        this.app = express();
        this.app.use(bodyParser.json());
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

        //验证token是否过期并规定哪些路由不用验证
        this.app.use(expressjwt({
            secret: 'mes_qdhd_mobile_xhykjyxgs',
            algorithms: ['HS256']
        }).unless({
            path: ['/api/user/login', '/api/user/register']//除了这个地址，其他的URL都需要验证
        }));
        this.app.use(function(err, req, res, next) {
            if (err.name = 'UnauthorizedError') {
                return res.send({
                    code: 401,
                    message: 'Given token not valid for any token type'
                });
            }
        });
    }

    setRoute(path, handlerFunction, methods) {
        const handler = async (req, res) => {
            let result;
            // IP 过滤
            const requestClientIp = getClientIp(req);
            if (!requestClientIp) {
                return FORBIDDEN_ERROR_CODE;
            }
            const event = req.body;
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
                    code: 200,
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
                        data: [],
                    };
                } else {
                    result = {
                        code: 500,
                        data: [],
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
        this.app[methods](this.contextPath + path, handler);
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