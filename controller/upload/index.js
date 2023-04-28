// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NOT_FOUND_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    upload,
} = require("../../api");

/**
 * get comment list
 * @param event
 * @param req
 * @param res
 */
async function uploadApi(event, req, res) {
    const {
        file,
    } = req.file

    if(!id) {
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Id is a required filed.");
    };

    const response = await upload(file)

    return {
        data: response,
    }
}

module.exports = {
    getUserDetailApi,
}