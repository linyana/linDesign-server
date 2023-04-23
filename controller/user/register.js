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
} = require("../../api/user");

// token
const {
    verToken,
} = require("../../utils/token")

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

    if(!account){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Account is a required field");
    }
    if(!password){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Password is a required field");
    }
    const response = await searchAccount(account);
    // const token = req.headers.authorization
    // const {
    //     id,
    // } = await verToken(token)
    if(response.length){
        throw new MyError(NO_AUTH_ERROR_CODE, "This account had been already exist.");
    }
    await userRegister(account,password)
    return {
        message: 'register success.',
    }
}

module.exports = {
    userRegisterApi,
}