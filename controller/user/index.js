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

module.exports = {
    userLoginApi,
    userRegisterApi,
    getUserDetailApi,
    userResetPasswordApi,
}