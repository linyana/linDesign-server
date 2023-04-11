const MyError = require("../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
} = require("../exception/errorCode");

const {
    userRegister,
    userLogin,
} = require("../api/user");

/**
 * 用户注册
 * @param event
 * @param req
 * @param res
 */
async function userLoginApi(event, req, res) {
    return await userLogin();
}

async function userRegisterApi(event, req, res) {
    const {
        password,
        account,
    } = req.body
    if(!password || !account){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请输入关键词");
    }
    return await userRegister(account,password);
}


module.exports = {
    userRegisterApi,
    userLoginApi,
}