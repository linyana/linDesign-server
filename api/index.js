const {
    searchAccount,
    searchPhone,
    userRegister,
    getUserDetail,
    userResetPassword,
    editUserDetail,
} = require('./user')

const {
    getCommentList,
    addComment,
    searchComment,
    deleteComment,
    getCommentListByUser,
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
    getCommentListByUser,
    editUserDetail,
}