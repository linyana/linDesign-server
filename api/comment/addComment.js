const {
    operateSQL,
} = require('../../utils')

async function addComment(account_id, text, name, connect_id,) {
    console.log(name)
    console.log(`account_id="${account_id}", text="${text}"${name?', name="' + name + '"' : ',connect_id="' + connect_id + '"'}`)
    return await operateSQL.insert({
        table: 'comment',
        set: `account_id="${account_id}", text="${text}" ${name?', name="' + name + '"' : ',connect_id="' + connect_id + '"'}`
    })
}

module.exports = {
    addComment,
}
