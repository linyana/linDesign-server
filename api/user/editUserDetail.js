const {
    operateSQL,
} = require('../../utils')

async function editUserDetail(img, name, id) {
    if(typeof img === "string") {
        img2 = img.replace(/\\/g, "\\\\")
        return await operateSQL.update({
            table: 'user',
            set: `img="${img2}",name="${name}"`,
            where: `id="${id}"`
        })
    }else {
        return await operateSQL.update({
            table: 'user',
            set: `name="${name}"`,
            where: `id="${id}"`
        })
    }
}

module.exports = {
    editUserDetail,
}
