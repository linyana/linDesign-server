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
 * get comment list
 * @param event
 * @param req
 * @param res
 */
async function getCommentListApi(event, req, res) {
    if(!req.query.name){
        throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请输入关键词");
    }

    const mainResponse = await getCommentList(req.query.name);
    if(!mainResponse.length) {
        return {
            data: null,
        }
    }
    const getReply = async () => {
        for(let index in mainResponse){
            try{
                const connectResponse = await getCommentList(false,mainResponse[index].id);
                mainResponse[index].reply = connectResponse ?? []
            }
            catch (err){}
        }
    }
    await getReply()

    return {
        data: mainResponse,
    }
}

module.exports = {
    getCommentListApi,
}