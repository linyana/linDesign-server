const {
    getCommentList,
    getCommentListByUser,
} = require('./getCommentList')

const {
    addComment,
} = require('./addComment')

const {
    searchComment,
} = require('./searchComment')

const {
    deleteComment,
} = require('./deleteComment')

module.exports = {
    getCommentList,
    addComment,
    searchComment,
    deleteComment,
    getCommentListByUser,
}