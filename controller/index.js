const {
    userLoginApi,
    userRegisterApi,
    getUserDetailApi,
    userResetPasswordApi,
    userEditUserDetailApi,
} = require('./user')

const {
    getCommentListApi,
    addCommentApi,
    deleteCommentApi,
} = require('./comment')

const {
    uploadApi,
} = require('./upload')

module.exports = {
    userLoginApi,
    userRegisterApi,
    getCommentListApi,
    addCommentApi,
    deleteCommentApi,
    getUserDetailApi,
    uploadApi,
    userResetPasswordApi,
    userEditUserDetailApi,
}