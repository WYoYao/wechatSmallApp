// 引入调用接口类
const Jrequest = require("../../../api/request.js");
// let JDate = require("../../../utils/JDate.js");
const {to} = require("../../../utils/navigate.js");
// 页面需要的转换类型
const {swichStartType,switchPriceType,switchBreakfastNum,swichWIFI}=require("../common/hotelConvert.js");

const JDate =require("../../../utils/JDate.js");


Page({
    //写入入住日期
  setStartDate(StartDate){
    this.setData({
      state:Object.assign(this.data.state,{
        StartDate
      })
    })
    let date = new JDate(StartDate);
    this.setData({
      StartDate:{
        Month:date.Date2Json().month,
        Day:date.Date2Json().date
      }
    })
    this.setData({
      totalDays:(new JDate(this.data.state.EndtDate)-date)/(24*60*60*1000)
    })
  },
  // 写入离店日期
  setEndDate(EndDate){
    this.setData({
      state:Object.assign(this.data.state,{
        EndDate
      })
    })
    let date =new JDate(EndDate);
    this.setData({
      EndtDate:{
        Month:date.Date2Json().month,
        Day:date.Date2Json().date
      }
    })
    this.setData({
      totalDays:(date-new JDate(this.data.state.StartDate))/(24*60*60*1000)
    })
    
  },
  data:{
    state:{}
  },
  onLoad:function(options){
    console.log(JSON.stringify(options));
      /**
       * mock 数据
       */
      options={"HotelId":"80005326","HotelCode":"1975","HotelName":"北京西苑饭店","HotelStarId":"1","HotelCircleID":"125","GroupId":"848","imgLogo":"http://hotelimg.jsj.com.cn:8888/Elong/2016-06-13/684c7da9-f979-4072-a0a2-44e82c44c1fd4441.jpg","HotelRooms":"0","HotelListId":"252892","Address":"海淀区三里河路1号(动物园正门斜对面)","Phone":"010-68313388","PostCode":"","SellingPoint":"","HotelIntro":"根据2015年6月1日起施行的《北京市控制吸烟条例》，北京西苑饭店酒店将不再提供吸烟房间。\n北京西苑饭店是北京首都旅游集团旗下的五星级庭院式商务花园酒店，饭店地处西二环与西三环之间的交通枢纽地带，紧邻地铁四号线、六号线及九号线，与金融街、北京展览馆、住房和城乡建设部、发改委、首都体育馆、家乐福超市、动物园紧紧相邻，是您在北京进行商务活动、举办各种会议，及出差旅游的理想场所。\n 饭店拥有各种类型客房近千间，20余种房型，设备齐全。新行政楼层占据酒店21-23层，在独立的行政酒廊您可以品尝到精致的免费早餐及惬意的欢乐时光，主楼所有客房无线WiFi全覆盖，行政楼层可选择多种养生睡枕，所有这些细节都会给您带来更加温馨、更加体贴的入住感受。\n\t北京西苑饭店拥有多家风味餐厅，位于26层的旋转餐厅提供丰盛的自助大餐，是京西唯一一家可以360度鸟瞰京城美景的餐厅。\n   北京西苑饭店一直秉承着“勇于担当，开拓创新”的经营理念，为每一位客人提供完善的设施和优质的服务。\n　　酒店主楼开业时间1984年，楼高26层，客房总数655间（套）。\n\n温馨提示：\n1、入住附楼需到主楼前台登记。\n2、若客人需要可免费提供穆斯林摆放备有：古兰经、朝拜垫、朝拜方向麦加","RecoReason":"","Remarks":"酒店主楼开业时间1984年，最新装修时间2013年，楼高26层，客房总数655间（套）。","Tips":"不含早连住两晚起的价格给不到我们北京酒店全城禁烟","TypeCode":"0","Description":"酒店要求客人务必提供手机号","BaseResponse":"[object Object]","HotelCircleName":"航天桥/首都师范大学","ListPicture":"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]","ListHotelFacilities":"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]","CircleDistance":"2.1","IsHaveWiFi":"true","IsHavePark":"true","IsHaveGym":"true","IsHaveMeet":"true","IsHaveRestaurant":"true","MemberPrice":"693","HotelScore":"0","TotalHotelDiscuss":"0","RecoLevelID":"3","IsHaveBroadband":"false","IsHaveSwimmingPool":"true","IsHaveBusinessCenter":"true","IsHavePick":"true","IsUseWifi":"1","IsUsePick":"2","IsUsePark":"2","OpeningDate":"1984月","RenovationDate":"2013年03月","GoogleLon":"116.332985300000","GoogleLat":"39.937787950000","BaiDuLon":"116.338842000000","BaiDuLat":"39.942943000000","AvgScore":"0","ScoreDesc":"","CommentInfoList":"","StartType":"五星级","logoImagesLength":"34","CityID":"110000","StartDate":"2017-01-14","EndDate":"2017-01-15","SHotelCode":"1975","SupplierId":"9","SupplierName":"","ForPeople":"1","RoomId":"1652063","RoomTypeId":"10846     ","RoomName":"主楼标准大床房","BedTypeName":"大床1.50米","WIFI":"0","IsLimitTimeSale":"0","BreakfastNum":"0","RatePlanName":"无早","SellDate":"20170114","RatePlanID":"797530","PriceType":"1","CurrencyID":"1","Amount":"7","Category":"","GuranteeRuleID":"0","GuranteeRuleDec":"不可取消","DrrRuleId":"0","IsInclude":"false","ValueDescription":"","RoomInvStatus":"1","RoomDesc":"","CurrentAlloment":"0","RatePlanCode":"17","CalStatus":"1","ListHotelCoverImg":"","RoomArea":"","FloorNum":"11-18","PeopleNum":"","RoomLook":"","ChangeRule":"1","Commission":"33","MinAdvDays":"0","MinStayDays":"-1","AddBed":"0","MaxCashback":"0","ExchangeRate":"1","IsAppExclusive":"false","IsHaveWindow":"false","IsSale":"false","SalePrice":"0","IsHaveWindowNew":"-1","RoomLabelName":"","FullCutType":"0","FullCutRoomDay":"0","FullCutFreeNum":"0","Breakfast":"不含早","WIFINAME":"不可上网","PriceTypeName":"￥"};
      
      let {
        HotelId,
        HotelCode,
        RoomId,
        RoomTypeId,
        RatePlanID:RatePlanld,
        RatePlanCode,
        StartDate,
        EndDate,
        CityID,
        HotelListId,
        StartDate,
        EndDate,
        CityID,
      }=options;
      // // 绑定的页面查询数据
      // this.setStartDate(HotelStartDate);
      // this.setEndDate(HotelEndDate);

      // // 调用酒店详情信息
      // new Jrequest("HotelApi").get("_GetRoomPrice", {
      //   HotelId,
      //   HotelStartDate,
      //   HotelEndDate,
      //   CityID,
      // }, data => { 
      
      //   if(data.BaseResponse.Code==1){

      //     data.StartType=swichStartType(data.HotelStarId);
      //     data.logoImagesLength=data.ListPicture.filter(item=>item.PicSizeTypeId==1).length;
      //     data.OpeningDate=data.OpeningDate.replace(/年\d+/,"");

      //     this.setData({
      //       HotelInfo:data
      //     })
      //   }

      // });


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