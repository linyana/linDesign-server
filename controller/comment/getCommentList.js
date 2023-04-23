// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    getCommentList,
} = require("../../api/comment");

/**
 * user login
 * @param event
 * @param req
 * @param res
 */
async function getCommentListApi(event, req, res) {
    if(!req.query.name){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请输入关键词");
    }
    const response = await getCommentList(req.query.name);
    if(!response.length){
        return {
            message: '',
        }
    }else {
        return {
            data: response
        }
    }
}

module.exports = {
    getCommentListApi,
}