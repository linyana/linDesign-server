// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    getCommentList,
    getUserDetail,
} = require("../../api");

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
        return []
    }
    const getReply = async (r) => {
        for(let index in r){
            try {
                const connectResponse = await getCommentList(false,mainResponse[index].id);
                try{
                    const accountDetailResponse = await getUserDetail(mainResponse[index].id)
                    mainResponse[index].account_name = accountDetailResponse[0].name || accountDetailResponse[0].account
                    mainResponse[index].account_img = accountDetailResponse[0].img
                }
                catch (err) {}
                mainResponse[index].reply = connectResponse ?? []
                if(mainResponse[index].reply){
                    for(let i in mainResponse[index].reply){
                        try {
                            const replyAccountDetailResponse = await getUserDetail(mainResponse[index].reply[i].account_id);
                            mainResponse[index].reply[i].account_name = replyAccountDetailResponse[0].name || replyAccountDetailResponse[0].account
                            mainResponse[index].reply[i].account_img = replyAccountDetailResponse[0].img
                            const replyCommentDetailResponse = await getCommentList(false,false,mainResponse[index].reply[i].id);
                            const replyConnectAccountDetailResponse = await getUserDetail(replyCommentDetailResponse[0].account_id);
                            mainResponse[index].reply[i].connect_name = replyConnectAccountDetailResponse[0].name || replyConnectAccountDetailResponse[0].account
                            mainResponse[index].reply[i].connect_text = replyCommentDetailResponse[0].text
                        }
                        catch (err) {}
                    }
                }
            }
            catch (err) {}
        }
    }
    await getReply(mainResponse)

    return mainResponse
}

module.exports = {
    getCommentListApi,
}