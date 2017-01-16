// 引入调用接口类
const Jrequest = require("../../../api/request.js");
// let JDate = require("../../../utils/JDate.js");
const {to} = require("../../../utils/navigate.js");
// 页面需要的转换类型
const {swichStartType, switchPriceType, switchBreakfastNum, swichWIFI} = require("../common/hotelConvert.js");

const JDate = require("../../../utils/JDate.js");

// 创建最晚到点时间的的数组
function createArriveTime(){
  let day=new JDate(new JDate().Date2shortStr()),hours=day.getHours(),minutes=day.getMinutes();
  
  //不满的14点的计算
  hours=hours<=12?14:hours;
  hours+=minutes>30?2:1;

  let arr=[];

  //循环遍历出的全部的字符的串数组
  while(hours<=30){
      
      if(hours<24){
        arr.push({
          key:`${hours}:00 前`,
          value:day.setHour(hours).Date2Str()
        });
      }else if(hours==24){
        arr.push({
          key:`23:59 前`,
          value:day.setHour(23).setMinute(59).Date2Str()
        });
      }else if(hours<=30){
        arr.push({
          key:`次日 ${hours-24}:00 前`,
          value:day.addDate(1).setHour(hours-24).Date2Str()
        });
      }

      hours++;
  }

  return arr;

};


Page({
  // 修改最晚离店时间
  bindArrivalTimePickerChange(e){
    //设置最晚离店日期
    this.setArrivalTime(this.data.ArrivalTimeEnum[+e.detail.value],+e.detail.value);
  },
  // 设置最晚的离店时间
  setArrivalTime(LatestArrivalTime,ArrivalTimeIndex=0){

    this.setData({
      ArrivalTimeIndex,
      state:Object.assign(this.data.state,{
        LatestArrivalTime
      })

    })
    
  },
  // 修改房间数的列表
  bindRoomNumberPickerChange(e){
    this.setRoomNum(+e.detail.value+1);
  },
  //写入房间数量
  setRoomNum(RoomNum){
    this.setData({
      state:Object.assign(this.data.state,{
        RoomNum
      })
    })
  },
  //写入入住日期
  setStartDate(StartDate) {
    this.setData({
      state: Object.assign(this.data.state, {
        StartDate
      })
    })
    let date = new JDate(StartDate);
    this.setData({
      StartDate: {
        Month: date.Date2Json().month,
        Day: date.Date2Json().date
      }
    })
    this.setData({
      totalDays: (new JDate(this.data.state.EndtDate) - date) / (24 * 60 * 60 * 1000)
    })
  },
  // 写入离店日期
  setEndDate(EndDate) {
    this.setData({
      state: Object.assign(this.data.state, {
        EndDate
      })
    })
    let date = new JDate(EndDate);
    this.setData({
      EndDate: {
        Month: date.Date2Json().month,
        Day: date.Date2Json().date
      }
    })
    this.setData({
      totalDays: (date - new JDate(this.data.state.StartDate)) / (24 * 60 * 60 * 1000)
    })

  },
  data: {
    state: {
      RoomNum:1,
    },
    roomEnum:["1间","2间","3间","4间","5间","6间","7间","8间","9间"],
    ArrivalTimeEnum:createArriveTime(),
    ArrivalTimeIndex:0,
  },
  onLoad: function (options) {
    console.log(JSON.stringify(options));
    /**
     * mock 数据
     */
    options = { "HotelId": "108276", "HotelCode": "00101590", "HotelName": "锦江集团北京泰山饭店", "HotelStarId": "2", "HotelCircleID": "108", "GroupId": "478", "imgLogo": "http://hotelimg.jsj.com.cn:8888/Elong/2016-06-14/7cc2707d-3cb8-437d-a6c6-333bc915d63b3147.jpg", "HotelRooms": "0", "HotelListId": "108068", "Address": "海淀区西三旗安宁北里8号(西三旗桥南侧)", "Phone": "010-62919988", "PostCode": "", "SellingPoint": "", "HotelIntro": "◆品牌酒店 交通便利\n　  北京泰山饭店隶属于山东省商业集团有限公司，是按照五星级标准建造的会议型饭店，由锦江（北方）管理有限公司管理。饭店拥有客房336间套，14个不同规格的宴会及会议室，中餐、西餐、韩餐三个餐厅，经营正宗的鲁菜、粤菜及西式、韩式美食。设备先进的会议、宴会场所和健身中心，是进行各类会议、宴会及娱乐休闲的首选之地。\n      饭店坐落于北京海淀区西三旗安宁北里八号，紧邻京城北部的上地信息产业基地，距北京首都国际机场仅需25分钟车程。泰山饭店周边毗邻联想、百度、金山、航天城等公司和北大、清华等高等院校，从饭店前往八达岭长城、十三陵、颐和园、圆明园等旅游景点交通便捷。是您商务出行、休闲度假、温馨家庭之旅的最佳选择！\n\n　　在这里您能品尝到正宗的粤菜、鲁菜。粤菜选料讲究，既有高档粤式菜肴，又面向大众消费包括小炒类菜系。鲁菜材料选用广泛，烹调技法多样，出品风味独特。\n　　餐厅内设有风格各异的包房20套，总面积1354平方米，充分满足社会各界人士的消费需求。其独特的设计、贴心的服务、具有山东文化特色的中餐环境为您的就餐提供温馨、舒适的感受。\n　　饭店2011年开业，楼高18层，客房总数336间（套）。", "RecoReason": "", "Remarks": "饭店开业时间2011年5月1日，楼高18层，客房总数336间（套）。", "Tips": "北京酒店全城禁烟", "TypeCode": "0", "Description": "酒店要求每个房间至少提供一名入住客人的姓名", "BaseResponse": "", "HotelCircleName": "上地工业园区", "ListPicture": "", "CircleDistance": "2", "IsHaveWiFi": "true", "IsHavePark": "true", "IsHaveGym": "true", "IsHaveMeet": "true", "IsHaveRestaurant": "true", "MemberPrice": "560", "HotelScore": "0", "TotalHotelDiscuss": "0", "RecoLevelID": "4", "IsHaveBroadband": "true", "IsHaveSwimmingPool": "true", "IsHaveBusinessCenter": "true", "IsHavePick": "false", "IsUseWifi": "1", "IsUsePick": "0", "IsUsePark": "2", "OpeningDate": "2011月", "RenovationDate": "2011年08月", "GoogleLon": "116.329099238000", "GoogleLat": "40.049590623000", "BaiDuLon": "116.335896000000", "BaiDuLat": "40.055387000000", "AvgScore": "0", "ScoreDesc": "", "CommentInfoList": "", "StartType": "豪华型", "logoImagesLength": "17", "CityID": "110000", "StartDate": "2017-01-16", "EndDate": "2017-01-20", "SHotelCode": "00101590", "SupplierId": "5", "SupplierName": "", "ForPeople": "1", "RoomId": "474117", "RoomTypeId": "0063", "RoomName": "标准大床间", "BedTypeName": "大床1.8米", "WIFI": "1", "IsLimitTimeSale": "0", "BreakfastNum": "0", "RatePlanName": "不含早（8折限时特惠）", "SellDate": "20170116", "RatePlanID": "795882", "PriceType": "0", "CurrencyID": "1", "Amount": "0", "Category": "", "GuranteeRuleID": "0", "GuranteeRuleDec": "", "DrrRuleId": "0", "IsInclude": "false", "ValueDescription": "", "RoomInvStatus": "0", "RoomDesc": "大床1.8米、3-15楼、34.4平米、免费宽带、可入住2人", "CurrentAlloment": "-1", "RatePlanCode": "268400", "CalStatus": "0", "ListHotelCoverImg": "", "RoomArea": "34.4", "FloorNum": "3-15", "PeopleNum": "2", "RoomLook": "", "ChangeRule": "-1", "Commission": "39.2", "MinAdvDays": "0", "MinStayDays": "1", "AddBed": "-1", "MaxCashback": "16", "ExchangeRate": "1", "IsAppExclusive": "false", "IsHaveWindow": "true", "IsSale": "false", "SalePrice": "0", "IsHaveWindowNew": "1", "RoomLabelName": "", "FullCutType": "0", "FullCutRoomDay": "0", "FullCutFreeNum": "0", "Breakfast": "不含早", "WIFINAME": "免费宽带", "PriceTypeName": "￥" };

    this.setData(options);

    let {
      HotelId,
      HotelCode,
      RoomId,
      RoomTypeId,
      RatePlanID: RatePlanld,
      RatePlanCode,
      StartDate,
      EndDate,
      CityID,
      HotelListId,
      SupplierId,
    } = options;
    // 绑定的页面查询数据
    this.setStartDate(StartDate);
    this.setEndDate(EndDate);

    //会员数据暂时没有默认为898
    let CustomerType = 2;
    let RoomNum = 0;

    // 调用单个房型多日价格
    new Jrequest("HotelApi").get("_GetRoomPrice", {
      HotelId,
      HotelCode,
      RoomId,
      RoomTypeId,
      RatePlanld,
      RatePlanCode,
      StartDate,
      EndDate,
      SupplierId,
      CityID,
      CustomerType,
      RoomNum
    }, data => {

      if (data.BaseResponse.Code == 1) {
        this.setData({
          RoomPrice: data
        });
        console.log(data);

      }

    });

    //调用酒店担保信息
    new Jrequest("HotelApi").get("_GetOrderGuranteeInfoNew", {
      RoomID: RoomId,
      RatePlanld,
      RoomTypeID: RoomTypeId,
      HotelID: HotelId,
      CityID,
    }, data => {

      if (data.BaseResponse.Code == 1) {
        this.setData({
          GuranteeInfo: data
        });
      }

    });


    // 生命周期函数--监听页面加载

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