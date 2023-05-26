

// api map
const {
    editUserDetail,
} = require("../../api");

/**
 * user register
 * @param event
 * @param req
 * @param res
 */
async function userEditUserDetailApi(event, req, res) {
    const {
        img,
        name,
        id,
    } = req.body

    await editUserDetail(img,name,id)
    return {
        data: true,
        message: 'edit user detail success.',
    }
}

module.exports = {
    userEditUserDetailApi,
}