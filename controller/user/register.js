// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NO_AUTH_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    userRegister,
    searchAccount,
    searchPhone,
} = require("../../api");

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
        phone,
    } = req.body

    if(!account){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Account is a required field");
    }
    if(!password){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Password is a required field");
    }
    if(!phone){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Phone is a required field");
    }
    // 判断账号是否存在
    const response = await searchAccount(account);
    if(response.length){
        throw new MyError(NO_AUTH_ERROR_CODE, "This account had been already exist.");
    }

    // 判断电话是否存在
    const phoneResponse = await searchPhone(account);
    if(phoneResponse.length){
        throw new MyError(NO_AUTH_ERROR_CODE, "This phone had been already exist.");
    }
    await userRegister(account,password)
    return {
        data: true,
        message: 'register success.',
    }
}

module.exports = {
    userRegisterApi,
}