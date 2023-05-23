const {
    operateSQL,
} = require('../../utils')

async function userResetPassword(password, id) {
    return await operateSQL.update({
        table: 'user',
        set: `password="${password}"`,
        where: `id=${id}`
    })
}

module.exports = {
    userResetPassword,
}
