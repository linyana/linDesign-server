const routes = [
    {
        path: "/user/login",
        handler: require("../controller").userLoginApi,
        methods: 'post',
    },
    {
        path: "/user/register",
        handler: require("../controller").userRegisterApi,
        methods: 'post',
    },
    {
        path: "/comments",
        handler: require("../controller").getCommentListApi,
        methods: 'get',
    },
    {
        path: "/comments",
        handler: require("../controller").addCommentApi,
        methods: 'post',
    }
]

module.exports = routes