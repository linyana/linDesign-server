const MyError = require("../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NO_AUTH_ERROR_CODE,
} = require("../exception/errorCode");

const {
    userRegister,
    searchAccount,
} = require("../api/user");
const jwt = require("jsonwebtoken");

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
        const tokenStr = jwt.sign({ account: account }, 'mes_qdhd_mobile_xhykjyxgs', { expiresIn: '10h' });
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
    if(!password || !account){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请输入关键词");
    }
    const response = await searchAccount(account);
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