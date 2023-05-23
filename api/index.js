const {
    searchAccount,
    searchPhone,
    userRegister,
    getUserDetail,
    userResetPassword,
} = require('./user')

const {
    getCommentList,
    addComment,
    searchComment,
    deleteComment,
} = require('./comment')

const {
    upload,
} = require('./upload')

module.exports = {
    searchAccount,
    userRegister,
    getUserDetail,
    getCommentList,
    addComment,
    searchComment,
    searchPhone,
    deleteComment,
    userResetPassword,
}