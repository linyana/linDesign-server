// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    addComment,
} = require("../../api");

/**
 * get comment list
 * @param event
 * @param req
 * @param res
 */
async function addCommentApi(event, req, res) {
    const {
        name,
        text,
        connect_id,
    } = req.body
    const account_id = req.auth.account_id;
    if(!name && !connect_id){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "There must have one between name and connect_id.");
    }
    if(!text) {
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Text is a required filed.");
    };
    const response = addComment(account_id, text, new Date().getTime(),  name || false, connect_id || false)
    return {
        data: response,
    }
}

module.exports = {
    addCommentApi,
}