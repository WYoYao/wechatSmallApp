const {obj2getstr} =require("convert");

// 执行跳转
const to=function(url,obj){
        let query_str = obj2getstr(obj);
        url=query_str?[url,"?",query_str].join(""):url;
        wx.navigateTo({
          url,
          success: function(res){
            // success
          },
          fail: function() {
              console.error(JSON.stringify(arguments));
            // fail
          },
          complete: function() {
            // complete
          }
        })
}


module.exports={
    to
}