const {
    searchAccount,
    userRegister,
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
    getCommentList,
    addComment,
    searchComment,
    deleteComment,
}