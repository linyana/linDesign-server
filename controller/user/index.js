const {
    userLoginApi,
} = require('./login')

const {
    userRegisterApi,
} = require('./register')

const {
    getUserDetailApi,
} = require('./getUserDetail')

const {
    userResetPasswordApi,
} = require('./resetPassword')

const {
    userEditUserDetailApi,
} = require('./editUserDetail')

module.exports = {
    userLoginApi,
    userRegisterApi,
    getUserDetailApi,
    userResetPasswordApi,
    userEditUserDetailApi,
}