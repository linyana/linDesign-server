const routes = [
    {
        path: "/user/login",
        handler: require("../controller").userLoginApi,
        methods: 'post',
    },
    {
        path: "/user/reset-password",
        handler: require("../controller").userResetPasswordApi,
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
      path: '/user/:id',
      handler: require("../controller").userEditUserDetailApi,
      methods: 'post',
    },
    {
        path: "/getComments",
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
        methods: 'delete',
    },
    {
        path: "/upload",
        handler: require("../controller").uploadApi,
        methods: 'post',
    }
]

module.exports = routes