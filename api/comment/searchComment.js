const {
    operateSQL,
} = require('../../utils')

async function searchComment(id) {
    return await operateSQL.search({
        table: 'comments',
        where: `id="${id}"`,
    })
}

module.exports = {
    searchComment,
}
