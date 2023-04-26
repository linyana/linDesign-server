// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NO_AUTH_ERROR_CODE,
    NOT_FOUND_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    searchComment,
    deleteComment,
} = require("../../api");

/**
 * get comment list
 * @param event
 * @param req
 * @param res
 */
async function deleteCommentApi(event, req, res) {
    const {
        id,
    } = req.params
    const account_id = req.auth.account_id;

    if(!id) {
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "Id is a required filed.");
    };

    // 查询comment是否存在
    const getAuthResponse = await searchComment(id)

    if(!getAuthResponse.length){
        throw new MyError(NOT_FOUND_ERROR_CODE, "This comment didn't exist.")
    }

    // 判断是不是本人操作
    if(getAuthResponse[0].account_id === account_id){
        const deleteResponse = await deleteComment(id)
        return {
            data: deleteResponse,
        }
    }else {
        throw new MyError(NO_AUTH_ERROR_CODE, "You don't have permission to do this.");
    }
}

module.exports = {
    deleteCommentApi,
}