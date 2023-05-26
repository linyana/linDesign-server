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
const fs = require("fs");

/**
 * get comment list
 * @param event
 * @param req
 * @param res
 */
async function uploadApi(event, req, res) {
    if(req.files[0]) {
        const file = req.files[0]

        const fileName = './public\\uploads\\' + file.filename

        fs.rename(fileName, fileName + '.' + file.mimetype.split('/')[1], (err) => {
            if (err) throw err;
        })

        return {
            data: './server\\public\\uploads\\' + file.filename + '.' + file.mimetype.split('/')[1],
        }
    }
    else {
        return {
            data: true
        }
    }
}

module.exports = {
    uploadApi,
}