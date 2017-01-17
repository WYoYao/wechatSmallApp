const conf = {
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
        url:"http://172.16.6.134/awk/v1/API/WxAPI2AirwayKeeper.aspx",
        //贵宾厅签名(必须与服务器一致)
        SignatureKey:"a3bcb90d2d73fd0763f2fc1d5c13362b",
        BaseRequest:{
            AppSource: 2,
            LanguageVersion: 0,
            SourceWay: 80,
            FunctionVersion: 2,
            SourceCompanyID: 1
        }
    },
    User:{
        //酒店API地址124.193.250.33
        url:"http://172.16.5.102:81/Hosts/User.aspx",
        //酒店签名(必须与服务器一致)
        SignatureKey:"4D7D8DEB-5212-4758-808A-32D60F01D689",
        BaseRequest:{
            SourceWay: 20,
            LanguageVersion:0
        }
    },
    JUser:{
        //酒店API地址124.193.250.33
        url:"http://172.16.5.102:81/hosts/JUser.aspx",
        //酒店签名(必须与服务器一致)
        SignatureKey:"4D7D8DEB-5212-4758-808A-32D60F01D689",
        BaseRequest:{
            SourceWay: 20,
            LanguageVersion:0
        }
    },
    
}

module.exports = conf;