const {
    searchAccount,
    searchPhone,
} = require('./login')

const {
    userRegister,
} = require('./register')

const {
    getUserDetail,
} = require('./getUserDetail')

const {
    userResetPassword,
} = require('./resetPassword')

module.exports = {
    searchAccount,
    userRegister,
    getUserDetail,
    searchPhone,
    userResetPassword,
}