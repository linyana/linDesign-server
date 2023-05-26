// error
const MyError = require("../../exception");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NOT_FOUND_ERROR_CODE,
} = require("../../exception/errorCode");

// api map
const {
    getUserDetail,
    getCommentListByUser,
    getCommentList,
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

    const mainResponse = await getCommentListByUser(id)

    if(!mainResponse.length) {
        return {
            data: response[0]
        }
    }

    for(let index in mainResponse){
        try{
            const accountDetailResponse = await getUserDetail(mainResponse[index].account_id)
            mainResponse[index].account_name = accountDetailResponse[0].name || accountDetailResponse[0].account
            mainResponse[index].account_img = accountDetailResponse[0].img
            if(mainResponse[index].connect_id){
                const connectResponse = await getCommentList(false, false, mainResponse[index].connect_id)
                mainResponse[index].connect_text = connectResponse[0].text
            }
        }
        catch (err) {

        }
    }

    if(response.length){
        return {
            data: Object.assign(response[0],{
                comments: mainResponse,
            })
        }
    }else {
        throw new MyError(NOT_FOUND_ERROR_CODE, "Can\'t find this user.");
    }
}

module.exports = {
    getUserDetailApi,
}