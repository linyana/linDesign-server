const operateSQL = require('../../utils/operateSQL')

async function userRegister(account,password) {
    console.log(`account="${account}"password="${password}"`)
    return await operateSQL.insert({
        table: 'user',
        set: `account="${account}",password="${password}"`
    })
}

module.exports = userRegister
