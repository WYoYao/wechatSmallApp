// 引入调用接口类
const Jrequest = require("../../../api/request.js");
// let JDate = require("../../../utils/JDate.js");
const {to} = require("../../../utils/navigate.js");
// 页面需要的转换类型
const {swichStartType,switchPriceType,switchBreakfastNum,swichWIFI}=require("../common/hotelConvert.js");

const JDate =require("../../../utils/JDate.js");


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
  DetailToOrder:function(e){
    to("../fillorder/index", Object.assign(this.data.HotelInfo,this.data.state,JSON.parse(e.currentTarget.dataset.item)));
  },
  data:{
    state:{}
  },
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
  onLoad:function(options){
      // mock 跳转的数据库
      // options={"HotelListId":"252892","HotelId":"80001437","HotelName":"首旅集团北京西苑饭店","HotelStarId":"-1","HotelAddress":"海淀区三里河路1号(动物园正门斜对面)","MemberPrice":"688","OverBooking":"0","Amount":"0","HotelStatu":"1","BaiDuLon":"116.338842000000","BaiDuLat":"39.942943000000","CurrencyId":"1","HotelCircleName":"航天桥/首都师范大学","Distance":"0","HotelInfoDesc":"","DivideID":"8","ListHotelCoverImg":"[object Object]","GoogleLon":"116.332985300000","GoogleLat":"39.937787950000","IsHaveWiFi":"true","IsHavePark":"true","MaxCashback":"19","HotelScore":"0","TotalHotelDiscuss":"0","RecoLevelID":"3","SupplierId":"0","IsHaveGym":"true","IsHaveMeet":"true","IsHaveRestaurant":"true","HotelCircleID":"125","ExchangeRate":"1","MinCashback":"19","CityID":"110000","Description":"","HotelLabelName":"","AvgScore":"0","ScoreDesc":"","IsShowCommentInfo":"false","CommentCount":"0","HotelStarType":"五星级","PriceType":"￥","StartDate":"2017-01-20","EndDate":"2017-01-21","CityId":"110000","KeyWord":"","PriceMin":"0","PriceMax":"999999","OrderType":"6","BaseRequest":"[object Object]"};

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
      
      this.setData({
        state:{
          CityID
        }
      })
      // 绑定的页面查询数据
      this.setStartDate(HotelStartDate);
      this.setEndDate(HotelEndDate);
      

      // 调用酒店详情信息
      new Jrequest("HotelApi").get("_GetHotelInfo", {
        HotelId,
        HotelStartDate,
        HotelEndDate,
        CityID,
      }, data => { 
      
        if(data.BaseResponse.Code==1){

          data.StartType=swichStartType(data.HotelStarId);
          data.logoImagesLength=data.ListPicture.filter(item=>item.PicSizeTypeId==1).length;
          data.OpeningDate=data.OpeningDate.replace(/年\d+/,"");

          this.setData({
            HotelInfo:data
          })
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

          let roomlist = data.ListHotelRoom
          .sort(item=>item.RoomId)
          .reduce((content,item)=>{
            let arr=content.pop() || [];


            /**
             * 页面需要的值进行转换
             */
            item.Breakfast=switchBreakfastNum(item.BreakfastNum);
            item.WIFINAME=swichWIFI(item.WIFI);
            item.PriceTypeName=switchPriceType(item.CurrencyID);
            item.string=JSON.stringify(item);

            /**
             * 转换格式
             */
            if(arr.filter(info=>info.RoomId==item.RoomId).length){
              arr.push(item);
              // 添加后根据价格排序
              content.push(arr.sort((a,b)=>{
                return (a.MemberPrice-a.MaxCashback)-(b.MemberPrice-b.MaxCashback);
              }));
            }else{

              if(arr.length)content.push(arr);
              content.push([item]);
            }
            return content;
          },[])
          .sort((a,b)=>{

            return (a[0].MemberPrice-a[0].MaxCashback) - (b[0].MemberPrice-b[0].MaxCashback);
          });

          this.setData({
            roomlist
          })
    
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