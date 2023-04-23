// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    getCommentList,
} = require("../../api");

/**
 * user login
 * @param event
 * @param req
 * @param res
 */
async function getCommentListApi(event, req, res) {
    const {
        name,
    } = req.body
    if(!name){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请输入关键词");
    }
    const response = await getCommentList(name);
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