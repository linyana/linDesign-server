// error
const MyError = require("../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NO_AUTH_ERROR_CODE,
} = require("../exception/errorCode");

// api map
const {
    userRegister,
    searchAccount,
} = require("../api/user");

// token
const {
    setToken,
    verToken,
} = require("../utils/token")

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
            token: `Bearer ${tokenStr}`
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

    const token = req.headers.authorization

    if(!password || !account){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请输入关键词");
    }
    const response = await searchAccount(account);
    const t2 = await verToken(token)
    console.log(t2)
    if(response.length){
        throw new MyError(NO_AUTH_ERROR_CODE, "account had been already exist.");
    }
    await userRegister(account,password)
    return {
        message: 'register success.',
    }
}

module.exports = {
    userRegisterApi,
    userLoginApi,
}