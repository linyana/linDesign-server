const {
    operateSQL,
} = require('../../utils')

async function userRegister(account,password, phone) {
    return await operateSQL.insert({
        table: 'user',
        set: `account="${account}",password="${password}",phone="${phone}", img="https://s2.loli.net/2023/04/25/gN5pCqRxY9SLbyA.png"`
    })
}

module.exports = {
    userRegister,
}
