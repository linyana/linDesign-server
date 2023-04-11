const routes = [
    {
        path: "/user/register",
        handler: require("../controller/user").userRegisterApi,
    },
    {
        path: "/user/login",
        handler: require("../controller/user").userLoginApi,
    },
]

module.exports = routes