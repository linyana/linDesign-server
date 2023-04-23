const {
    operateSQL,
} = require('../../utils')

async function userRegister(account,password) {
    return await operateSQL.insert({
        table: 'user',
        set: `account="${account}",password="${password}"`
    })
}

module.exports = {
    userRegister,
}
