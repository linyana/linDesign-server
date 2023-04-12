const MyError = require("../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NO_AUTH_ERROR_CODE,
} = require("../exception/errorCode");

const {
    userRegister,
    searchAccount,
} = require("../api/user");

async function userLoginApi(event, req, res) {
    const {
        account,
        password,
    } = req.body
    if(!account){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请输入关键词");
    }
    const response = await searchAccount(account);
    if(!response.length){
        throw new MyError(NO_AUTH_ERROR_CODE, "account didn\'t exist.");
    }
    if(response[0]?.password === password){
        return {
            message: '',
            token: 'Bearer 1'
        }
    }else {
        throw new MyError(NO_AUTH_ERROR_CODE, "password wrong.");
    }
}

/**
 * user register
 * @param event
 * @param req
 * @param res
 */
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