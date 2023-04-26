const {
    userLoginApi,
    userRegisterApi,
    getUserDetailApi,
} = require('./user')

const {
    getCommentListApi,
    addCommentApi,
    deleteCommentApi,
} = require('./comment')

module.exports = {
    userLoginApi,
    userRegisterApi,
    getCommentListApi,
    addCommentApi,
    deleteCommentApi,
    getUserDetailApi,
}