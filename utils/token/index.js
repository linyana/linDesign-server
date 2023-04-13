const jwt = require('jsonwebtoken');
const key = 'mes_qdhd_mobile_xhykjyxgs';
exports.setToken = function(username,userid){
    return new Promise((resolve,reject)=>{
        const token = jwt.sign({
            name:username,
            _id:userid
        },key,{ expiresIn:'2h' });
        resolve(token);
    })
}
exports.verToken = function(token){
    return new Promise((resolve,reject)=>{
        const info = jwt.verify(token.split(' ')[1],key);
        resolve(info);
    })
}