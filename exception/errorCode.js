/**
 * 错误码
 * @type {number}
 */

// 请求参数错误
const REQUEST_PARAMS_ERROR_CODE = 400;

// 无权限访问
const NO_AUTH_ERROR_CODE = 401;

// 访问被禁止
const FORBIDDEN_ERROR_CODE = 403;

// 系统错误
const SYSTEM_ERROR_CODE = 500;

// 找不到数据
const NOT_FOUND_ERROR_CODE = 404;

// 第三方服务错误
const THIRD_PART_SERVICE_ERROR_CODE = 501;

module.exports = {
    REQUEST_PARAMS_ERROR_CODE,
    NO_AUTH_ERROR_CODE,
    FORBIDDEN_ERROR_CODE,
    SYSTEM_ERROR_CODE,
    NOT_FOUND_ERROR_CODE,
    THIRD_PART_SERVICE_ERROR_CODE,
};