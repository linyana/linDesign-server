const {
    userLoginApi,
    userRegisterApi,
} = require('./user')

const {
    getCommentListApi,
    addCommentApi,
} = require('./comment')

module.exports = {
    userLoginApi,
    userRegisterApi,
    getCommentListApi,
    addCommentApi,
}