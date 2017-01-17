// pages/viphall/index.js
let Jrequest = require("../../../api/request.js");
let JDate = require("../../../utils/JDate.js");
let {to} = require("../../../utils/navigate.js");


var app = getApp();

Page({
	
	  
  data:{},
	
 // 获取酒店列表
  getVIPHallList:function(){
    new Jrequest("VipHallApi").get("_GetVIPHallList", {}, data => { 
console.log(data);
      if(data.BaseResponse.Code==1){

        // 获取的数据转换出页面需要的属性
        let ListHotel=data.ListHotel.map(item=>{

          return [swichStartType,switchPriceType,toJSONStringify].reduce((content,fn)=>fn(content),item)

        });

        this.setData({
           GroupedVIPHallListRes:{
            GroupedVIPHallList,
            TotalCount:data.TotalCount
          }
        })

      }

     });
  },
  
  
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   
    this.getVIPHallList();
    
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