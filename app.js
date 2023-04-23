const express = require('express');//引入express模块
const { ExpressServer } = require('./server')
const routes = require('./router')

const server = new ExpressServer();

// 注册接口路由
for (const route of routes) {
    server.setRoute(route.path, route.handler, route.methods);
}

// 开启端口
server.listen(8081);
