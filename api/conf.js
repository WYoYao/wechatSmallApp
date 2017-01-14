const conf = {

    // HotelApi:{
    //     //酒店API地址124.193.250.33
    //     url:"http://172.16.9.58/JApi.Web.Tests/Default.aspx",
    //     //酒店签名(必须与服务器一致)
    //     SignatureKey:"2134"
    // },

    HotelApi:{
        //酒店API地址124.193.250.33
        url:"http://172.16.5.11:8020/HotelAPI.aspx",
        //酒店签名(必须与服务器一致)
        SignatureKey:"!QAZxsw2#EDC",
        BaseRequest:{
            AppSource: 2,
            ClientLanguage: 0,
            SourceWay: 20,
            FunctionVersion: 2
        }
    },

    VipHallApi:{
        url:"http://172.16.6.134/awk/v1/API/WebAPI2AirwayKeeper.aspx"
    }
    
}

module.exports = conf;