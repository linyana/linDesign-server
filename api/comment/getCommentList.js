const {
    operateSQL,
} = require('../../utils')

async function getCommentList(name) {
    return await operateSQL.search({
        table: 'comment',
        where: `name="${name}"`,
    })
}

module.exports = {
    getCommentList,
}
