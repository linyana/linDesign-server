const {
    operateSQL,
} = require('../../utils')

async function getCommentList(name, parent_id, id) {
    if(id){
        return await operateSQL.search({
            table: 'comments',
            where: `id=${id}`,
        })
    }
    if(name && parent_id){
        return await operateSQL.search({
            table: 'comments',
            where: `name="${name}", parent_id="${parent_id}"`,
        })
    }
    else if (name){
        return await operateSQL.search({
            table: 'comments',
            where: `${name? 'name="' + name + '"' : ''}`,
        })
    }else {
        return await operateSQL.search({
            table: 'comments',
            where: `${parent_id? 'parent_id="' + parent_id + '"' : ''}`,
        })
    }
}

async function getCommentListByUser(account_id) {
    return await operateSQL.search({
        table: 'comments',
        where: `account_id=${account_id}`,
    })
}

module.exports = {
    getCommentList,
    getCommentListByUser,
}
