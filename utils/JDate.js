
/**
 * Date 子类添加的 添加系列的方法 和转换 (兼容)
 * 
 */

function JDate(props=Date.now()){

    let date=new Date(props);
    
    date.Date2Json=function(){

        // 补齐0
        const complete=function(str="0"){
            return str.toString().length<=1?`0${str}`:str;
        }
        return {
            year:this.getFullYear(),
            month:complete(this.getMonth() + 1),
            date:complete(this.getDate()),
            hours:complete(this.getHours()),
            minutes:complete(this.getMinutes()),
            seconds:complete(this.getSeconds()),
        }
    }

        /**
     * 日期类型转换字符串
     * 格式yyyy-MM-dd hh:mm:ss
     */
    date.Date2Str=function(){
        let json=this.Date2Json();
        return `${json.year}-${json.month}-${json.date} ${json.hours}:${json.minutes}:${json.seconds}`;
    }

    /**
     * 日期类型转换短日期字符串
     * 格式yyyy-MM-dd
     */
    date.Date2shortStr=function(){
        let json=this.Date2Json();
        return `${json.year}-${json.month}-${json.date}`;
    }
    /**
     * 添加毫秒增加时间 不会修改this 的值,而是返回一个新的实例
     */
    date.addMillisecond=function(num){
      return new Jdate(+this+num);
    }
    /**
     * 添加秒
     */
    date.addSeconds=function(num){
        this.setSeconds(this.getSeconds()+num);
        return this
    }
    /**
     * 添加分
     */
    date.addMinutes=function(num){
        this.setMinutes(this.getMinutes()+num);
        return this
    }
    /**
     * 添加小时
     */
    date.addHours=function(num){
        this.setHours(this.getHours()+num);
        return this
    }
    /**
     * 添加天数
     */
    date.addDate=function(num){
        this.setDate(this.getDate()+num);
        return this
    }
    /**
     * 添加月
     */
    date.addMonth=function(num){
        this.setMonth(this.getMonth()+num);
        return this
    }
    /**
     * 添加年
     */
    date.addFullYear=function(num){
        this.setFullYear(this.getFullYear()+num);
        return this;
    }
    /**
     * 获取时间戳
     */
    date.getMillisecond=function(){
        return +this;
    }

    return date;

}





// /**
//  * Date 子类添加的 添加系列的方法 和转换
//  * 小程序Bug 暂时注释
//  */
// class JDate extends Date{
//     constructor(props=new Date()){
//         super(props);
//     }
//     /**
//      * Date 类型转换为JSON
//      */
//     Date2Json(){

//         // 补齐0
//         const complete=function(str="0"){
//             return str.toString().length<=1?`0${str}`:str;
//         }
//         return {
//             year:this.getFullYear(),
//             month:complete(this.getMonth() + 1),
//             date:complete(this.getDate()),
//             hours:complete(this.getHours()),
//             minutes:complete(this.getMinutes()),
//             seconds:complete(this.getSeconds()),
//         }
//     }
//     /**
//      * 日期类型转换字符串
//      * 格式yyyy-MM-dd hh:mm:ss
//      */
//     Date2Str(){
//         let json=this.Date2Json();
//         return `${json.year}-${json.month}-${json.date} ${json.hours}:${json.minutes}:${json.seconds}`;
//     }

//     /**
//      * 日期类型转换短日期字符串
//      * 格式yyyy-MM-dd
//      */
//     Date2shortStr(){
//         let json=this.Date2Json();
//         return `${json.year}-${json.month}-${json.date}`;
//     }
//     /**
//      * 添加毫秒增加时间 不会修改this 的值,而是返回一个新的实例
//      */
//     addMillisecond(num){
//       return new Jdate(+this+num);
//     }
//     /**
//      * 添加秒
//      */
//     addSeconds(num){
//         this.setSeconds(this.getSeconds()+num);
//         return this
//     }
//     /**
//      * 添加分
//      */
//     addMinutes(num){
//         this.setMinutes(this.getMinutes()+num);
//         return this
//     }
//     /**
//      * 添加小时
//      */
//     addHours(num){
//         this.setHours(this.getHours()+num);
//         return this
//     }
//     /**
//      * 添加天数
//      */
//     addDate(num){
//         this.setDate(this.getDate()+num);
//         return this
//     }
//     /**
//      * 添加月
//      */
//     addMonth(num){
//         this.setMonth(this.getMonth()+num);
//         return this
//     }
//     /**
//      * 添加年
//      */
//     addFullYear(num){
//         this.setFullYear(this.getFullYear()+num);
//         return this;
//     }
//     /**
//      * 获取时间戳
//      */
//     getMillisecond(){
//         return +this;
//     }
// }

module.exports = JDate;