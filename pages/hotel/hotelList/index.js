// 引入调用接口类
let Jrequest = require("../../../api/request.js");
let JDate = require("../../../utils/JDate.js");
let {to} = require("../../../utils/navigate.js");

/**
 * 星级转换
 */
function swichStartType(item){
  
  item.HotelStarType = {
    "1":"五星级", 
    "2":"豪华型", 
    "3":"四星级", 
    "4":"高档型", 
    "5":"三星级", 
    "6":"舒适型", 
    "11":"经济型", 
    "7":"二星级"
  }[item.HotelStarId];

  return item;
}

/**
 * 货币类型转换
 */
function switchPriceType(item) {
  
  item.PriceType = {
    "1":"￥", 
    "2":"$", 
    "3":"HK$", 
    "11":"MOP$", 
  }[item.CurrencyId];

  return item;
}

/**
 * 保存字符出的JSON 用于跳转
 */

function toJSONStringify(item){
  item.string=JSON.stringify(item);
  return item;
}


Page({
  helloWorld:function(){
    return "HelloWorld";
  },
  handleToDetail: function (e) {
    to("../hoteldetails/index",Object.assign(JSON.parse(e.currentTarget.dataset.item),this.data.state));
  },
  // 设置入住日期
  setStartDate(StartDate) {
    this.setData({
      state: Object.assign(this.data.state, {
        StartDate
      })
    })
    let date = new JDate(StartDate).Date2Json();
    this.setData({
      StartDate: {
        Month: date.month,
        Day: date.date
      }
    })
  },
  // 设置离店日期
  setEndDate(EndDate) {
    this.setData({
      state: Object.assign(this.data.state, {
        EndDate
      })
    })
    let date = new JDate(EndDate).Date2Json();
    this.setData({
      EndtDate: {
        Month: date.month,
        Day: date.date
      }
    })
  },
  // 获取酒店列表
  getHotelList:function(){
    new Jrequest("HotelApi").get("_GetHotelList", this.data.state, data => { 

      if(data.BaseResponse.Code==1){

        // 获取的数据转换出页面需要的属性
        let ListHotel=data.ListHotel.map(item=>{

          return [swichStartType,switchPriceType,toJSONStringify].reduce((content,fn)=>fn(content),item)

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
  data: {

  },
  onLoad: function (options) {
    // 接收上一页面的参数  附加到当前页面对象上面
    let {StartDate, EndDate} = options;
    this.setData({
      state: Object.assign(options, this.data.state)
    });
    this.setStartDate(StartDate);
    this.setEndDate(EndDate);
    // 生命周期函数--监听页面加载

    let req = {
      BaseRequest: {
        AppSource: 2,
        ClientLanguage: 0,
        SourceWay: 20,
        FunctionVersion: 2
      },
    };

    this.getHotelList();


  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})