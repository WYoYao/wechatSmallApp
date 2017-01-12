App({
  onLaunch: function() { 
    console.log("onLaunch");
    //调用API从本地缓存中获取数据  添加日志
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // Do something initial when launch.
  },
  onShow: function() {
    console.log("onShow");
      // Do something when show.
  },
  onHide: function() {
     console.log("onHide");
      // Do something when hide.
  },
  onError: function(msg) {
    console.log("onError");
    console.log(msg)
  },
  globalData: 'I am global data',
  // 获取用户信息方法
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              // 获取用户的信息，将内容保存的全局变量中
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})


