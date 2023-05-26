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

const {
    editUserDetail,
} = require('./editUserDetail')

module.exports = {
    searchAccount,
    userRegister,
    getUserDetail,
    searchPhone,
    userResetPassword,
    editUserDetail,
}