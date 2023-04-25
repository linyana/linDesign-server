const {
    operateSQL,
} = require('../../utils')

async function getCommentList(name, connect_id) {
    if(name && connect_id){
        return await operateSQL.search({
            table: 'comments',
            where: `name="${name}", connect_id="${connect_id}"`,
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
            where: `${connect_id? 'connect_id="' + connect_id + '"' : ''}`,
        })
    }
}

module.exports = {
    getCommentList,
}
