const {
    operateSQL,
} = require('../../utils')

async function searchAccount(account) {
    return await operateSQL.search({
        table: 'user',
        where: `account="${account}"`,
    })
}

module.exports = {
    searchAccount,
}
