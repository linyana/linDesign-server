// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NOT_FOUND_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    getUserDetail,
} = require("../../api");

/**
 * get comment list
 * @param event
 * @param req
 * @param res
 */
async function getUserDetailApi(event, req, res) {
    const {
        id,
    } = req.params

    if(!id) {
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Id is a required filed.");
    };

    const response = await getUserDetail(id)

    if(response.length){
        return {
            data: response[0]
        }
    }else {
        throw new MyError(NOT_FOUND_ERROR_CODE, "Can\'t find this user.");
    }
}

module.exports = {
    getUserDetailApi,
}