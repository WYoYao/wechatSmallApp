// 引入调用接口类
let Jrequest = require("../../../api/request.js");
// let JDate = require("../../../utils/JDate.js");
let {to} = require("../../../utils/navigate.js");


Page({
  /**
   * 获取酒店详情信息
   */
  getHotelInfo:function(request){

    new Jrequest("HotelApi").get("_GetHotelInfo", this.data.state, data => { 

      if(data.BaseResponse.Code==1){

        console.log(data);
        
      }

     });

  },
  handle_go_index:function(){
      wx.navigateTo({
        url: "../index/index",
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  },
  data:{
    
  },
  onLoad:function(options){
    
      console.log(JSON.stringify(options));

      // 酒店详情信息获取
      let {
        HotelId,
        StartDate:HotelStartDate,
        EndDate:HotelEndDate,
        CityID:CityId,
        HotelListId,
        StartDate,
        EndDate,
        CityID,
      }=options;

      // 调用酒店详情信息
      new Jrequest("HotelApi").get("_GetHotelInfo", {
        HotelId,
        HotelStartDate,
        HotelEndDate,
        CityID,
      }, data => { 
      
        if(data.BaseResponse.Code==1){
          console.log(data);
        }

      });

      // 调用酒店房型列表信息
      new Jrequest("HotelApi").get("_GetHotelRoomList", {
        HotelListId,
        HotelId,
        StartDate,
        EndDate,
        Week:"1,2,3,4,5,6,7",
        CityId,
      }, data => { 
      
        if(data.BaseResponse.Code==1){
          console.log(data);
        }

      });




    // 生命周期函数--监听页面加载
   
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow:function(){
    // 生命周期函数--监听页面显示

  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏

  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})