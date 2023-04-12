const operateSQL = require('../../utils/operateSQL')

async function searchAccount(account) {
    return await operateSQL.search({
        table: 'user',
        where: `account="${account}"`,
    })
}

module.exports = {
    searchAccount,
}
