const {
    operateSQL,
} = require('../../utils')

async function searchAccount(account) {
    return await operateSQL.search({
        table: 'user',
        where: `account="${account}"`,
    })
}

async function searchPhone(phone) {
    return await operateSQL.search({
        table: 'user',
        where: `phone="${phone}"`,
    })
}

module.exports = {
    searchAccount,
    searchPhone,
}
