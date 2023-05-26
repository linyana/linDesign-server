// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE, NO_AUTH_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    userResetPassword, searchAccount, searchPhone,
} = require("../../api");

const md5 =  require('md5-node');

/**
 * user register
 * @param event
 * @param req
 * @param res
 */
async function userResetPasswordApi(event, req, res) {
    const {
        password,
        account,
        phone,
    } = req.body

    const md5_password = md5(password  + 'wkldsw')

    if(!account){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Account is a required field");
    }
    if(!md5_password){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Password is a required field");
    }
    if(!phone){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Phone is a required field");
    }

    // 判断账号是否存在
    const response = await searchAccount(account);
    if(!response.length){
        throw new MyError(NO_AUTH_ERROR_CODE, "账号不存在");
    }

    // 判断电话是否存在
    const phoneResponse = await searchPhone(phone);
    if(!phoneResponse.length){
        throw new MyError(NO_AUTH_ERROR_CODE, "手机号不存在");
    }

    if(response[0].id !== phoneResponse[0].id){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "账号和密码不匹配");
    }
    await userResetPassword(md5_password,response[0].id)
    return {
        data: true,
        message: 'reset password success.',
    }
}

module.exports = {
    userResetPasswordApi,
}