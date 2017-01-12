
const { get_type } = require("../utils/valite.js");
const md5 = require("../utils/md5.js");
const {timestamp} = require("../utils/date.js");
const conf = require("./conf.js");

// const conf = {

//     HotelApi:{
//         //酒店API地址124.193.250.33
//         url:"http://172.16.9.58/JApi.Web.Tests/Default.aspx",
//         //酒店签名(必须与服务器一致)
//         SignatureKey:"2134"
//     }
// }

class Jrequest {
    constructor(key) {
        if (!conf[key]) throw new Error("key not find");
        let {SignatureKey, url} = conf[key];

        return Object.assign(this, { SignatureKey, url });
    }
    get(MethodName, Json, cb) {

        if (get_type(MethodName) != "String") throw new Error("MethodName must be a String");

        if (!Json || get_type(Json) != "Object") throw new Error("Json must be an Object");

        if (!cb || get_type(cb) != "Function") throw new Error("cb must be a Function");

        //配置请求基类
        // Json.BaseRequest = {
        //         SourceWay: 50
        // }

        //时间戳
        let Timestamp = timestamp();
        
        let Sign = md5.hex_md5(JSON.stringify(Json) + MethodName + Timestamp + this.SignatureKey);

        //发送微信请求
        wx.request({
            url: this.url,
            data: {
                MethodName,
                Json,
                Sign,
                Timestamp
            },
            method: "post",
            header: {
                "Content-Type": "application/json"
            },
            success: function (res) {
                if (res.statusCode == 200) {
                    if (res.data.IsSuccess) {
                        cb(res.data.Json)
                    } else {
                        throw new Error('Server Error ' + res.data.ExceptionMessage)
                    }

                } else {
                    throw new Error('Request "' + this.Url + '" failed');
                }
            },
            fail: function () {

            },
            complete: function () {
            }
        })

    }
}

module.exports = Jrequest;


