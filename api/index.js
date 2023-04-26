const {
    searchAccount,
    userRegister,
    getUserDetail,
} = require('./user')

const {
    getCommentList,
    addComment,
    searchComment,
    deleteComment,
} = require('./comment')

module.exports = {
    searchAccount,
    userRegister,
    getUserDetail,
    getCommentList,
    addComment,
    searchComment,
    deleteComment,
}