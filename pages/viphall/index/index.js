// pages/viphall/index.js

let {to} = require("../../../utils/navigate.js");
let Jrequest = require("../../../api/request.js");
var app = getApp();

Page({
  data:{},


  // 获取酒店列表
  getHotelList:function(){
    new Jrequest("HotelApi").get("_GetHotelList", Object.assign(this.data.state,{
      BaseRequest: {
        AppSource: 2,
        ClientLanguage: 0,
        SourceWay: 80,
        FunctionVersion: 2
      },
    }), data => { 
      if(data.BaseResponse.Code==1){

        // 获取的数据转换出页面需要的属性
        let ListHotel=data.ListHotel.map(item=>{

          return [swichStartType,switchPriceType].reduce((content,fn)=>fn(content),item)

        });

        this.setData({
          hotelListRes:{
            ListHotel,
            TotalCount:data.TotalCount
          }
        })
      }
     });
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})