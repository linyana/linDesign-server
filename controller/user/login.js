// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NO_AUTH_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    searchAccount,
} = require("../../api");

// token
const {
    setToken,
} = require("../../utils")

/**
 * user login
 * @param event
 * @param req
 * @param res
 */
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
        const tokenStr = await setToken(account, response[0].id)
        return {
            message: '',
            token: `Bearer ${tokenStr}`,
            user_name: response[0].name || response[0].account
        }
    }else {
        throw new MyError(NO_AUTH_ERROR_CODE, "password wrong.");
    }
}

module.exports = {
    userLoginApi,
}