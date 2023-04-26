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
        path: "/user/:id",
        handler: require("../controller").getUserDetailApi,
        methods: 'get',
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
    },
    {
        path: "/comments/:id",
        handler: require("../controller").deleteCommentApi,
        methods: "delete",
    }
]

module.exports = routes