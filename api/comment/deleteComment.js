const {
    operateSQL,
} = require('../../utils')

async function deleteComment(id) {
    return await operateSQL.delete({
        table: 'comments',
        where: `id="${id}"`,
    })
}

module.exports = {
    deleteComment,
}
