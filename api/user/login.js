const operateSQL = require('../../utils/operateSQL')

async function userLogin() {
    return await operateSQL.searchAll({
        table: 'user'
    })
}

module.exports = userLogin
