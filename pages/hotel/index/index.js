//index.js
//获取应用实例
let {to}=require("../../../utils/navigate.js");
// let navigate=require("../../../utils/navigate.js");
var app = getApp();
// console.log(navigate);

console.log(app);

Page({
  data: {
    text: "This is page data.",
    num:0
  },
  handle_submit:function(event){
      let {num}=this.data;
      this.setData({
        num:++num
      });

      console.log(this.data);
  },
  handle_city_list: function(event) {
    to("../citylist/index",this.data);
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // wx.setNavigationBarTitle("asd");
    // Do something when page ready.
  },
  onShow: function() {
    // wx.setNavigationBarTitle("asd");
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {}
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })


