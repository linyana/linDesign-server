const {
    operateSQL,
} = require('../../utils')

async function addComment(account_id, text, date, name, connect_id, parent_id) {
    console.log(`account_id="${account_id}", text="${text}", date="${date}" ${name?', name="' + name + '"' : ',connect_id="' + connect_id + '"'} ${parent_id?`,parent_id=${parent_id}`:''}`)
    return await operateSQL.insert({
        table: 'comments',
        set: `account_id="${account_id}", text="${text}", date="${date}" ${name?', name="' + name + '"' : ',connect_id="' + connect_id + '"'} ${parent_id?`,parent_id=${parent_id}`:''}`
    })
}

module.exports = {
    addComment,
}
