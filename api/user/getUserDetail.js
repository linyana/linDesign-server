const {
    operateSQL,
} = require('../../utils')

async function getUserDetail(account_id) {
    return await operateSQL.search({
        table: 'user',
        where: `id="${account_id}"`,
    })
}

module.exports = {
    getUserDetail,
}
