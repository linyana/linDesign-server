const routes = [
    {
        path: "/user/register",
        handler: require("../controller").userRegisterApi,
    },
    {
        path: "/user/login",
        handler: require("../controller").userLoginApi,
    },
]

module.exports = routes