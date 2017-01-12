let {get_type} = require("./valite.js");

const add_zero=function(str="0"){
    if(str.toString().length<=1){
        return  `0${str}`;
    }else{
        return str;
    }
}


class Jdate extends Date{
    constructor(){
        super();
    }
    /**
     * 日期类型转换字符串
     * 格式yyyy-MM-dd hh:mm:ss
     */
    ConvertDate(){
        return [
            this.getFullYear(),
            '-',
            add_zero(this.getMonth() + 1),
            '-',
            add_zero(this.getDate()),
            ' ',
            add_zero(this.getHours()),
            ':',
            add_zero(this.getMinutes()),
            ':',
            add_zero(this.getSeconds()),
        ].join('');
    }
    addtimestamp(num){
      let str=+this+num;
      return new Jdate(new Date(str));
    }
}


// console.log(new Jdate("2017-01-12 12:54:00").addtimestamp(24*60*60*1000));
// console.log(new Date(1484200820019));
// console.log(new Jdate(1484287134668));
// console.log(new Date(1484287134668));
//console.log(new Jdate("2017-01-12 12:54:00").addtimestamp(24*60*60*1000).ConvertDate());





const timestamp = function () {
    return Date.parse(new Date());
}



module.exports = {
    timestamp:function(){
        return Date.parse(new Date());
    }
}