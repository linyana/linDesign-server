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
    deleteComment,
}