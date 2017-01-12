//index.js
//获取应用实例
let {to} = require("../../../utils/navigate.js");
// let navigate=require("../../../utils/navigate.js");
let Jrequest = require("../../../api/request.js");
// const {Jdate} =require("../../../utils/date.js");
// console.log(Jdate);
var app = getApp();
// 调用酒店列表
// let req={
//     BaseRequest: {
//         AppSource: 2,
//         ClientLanguage: 0,
//         SourceWay: 20,
//         FunctionVersion: 2
//     },
//     "CityId": 110000, 
//     "StartDate": "2017-01-12", 
//     "EndDate": "2017-01-13"
// };

// new Jrequest("HotelApi").get("_GetHotelList",req, data => { console.log(data) });



Page({
  data: {
    state:{
      StartDate: "2017-01-12",
      EndDate:"2017-01-13",
      CityId:"110000",
      KeyWord:"",
      PriceMin:0,
      PriceMax:999999,
      HotelStarId:-1,
    },
    StartDate:{

    },
    EndtDate:{
      
    }
  },
  setStartDate(StartDate){
    this.setData({
      state:Object.assign(this.data.state,{
        StartDate
      })
    })
    let date = new Date(StartDate);
    this.setData({
      StartDate:{
        Month:date.getMonth()+1,
        Day:date.getDate()
      }
    })
  },
  setEndDate(EndDate){
    this.setData({
      state:Object.assign(this.data.state,{
        EndDate
      })
    })
    let date =new Date(EndDate);
    this.setData({
      EndtDate:{
        Month:date.getMonth()+1,
        Day:date.getDate()
      }
    })
  },
  handle_submit: function (event) {
    to("../hotelList/index", this.data.state);
  },
  handle_city_list: function (event) {
    to("../citylist/index", this.data);
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    this.setStartDate("2017/1/12");
    this.setEndDate("2017/1/13")
    // Do something when page ready.
  },
  onShow: function () {
    // wx.setNavigationBarTitle("asd");
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})
