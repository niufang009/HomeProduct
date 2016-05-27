//1.上传图片显示图片的方法
//$(".touxiang").change(function() {
//  if (checkPic()) {
//      $(".tximg").attr("src", preImg(this.id, 'Preview'));
//  }
//})

function checkPic() {
    var picPath = $(".touxiang").val()
    var type = picPath.substring(picPath.lastIndexOf(".") + 1, picPath.length).toLowerCase();
    if (type != "jpg" && type != "bmp" && type != "gif" && type != "png") {
        alert("请上传正确的图片格式");
        return false;
    }
    return true;
}

function preImg(sourceId, targetId) {
    if (typeof FileReader === 'undefined') {
        alert('Your browser does not support FileReader...');
        return;
    }
    var reader = new FileReader();

    reader.onload = function(e) {
        var img = document.getElementById(targetId);
        img.src = this.result;
        //                      $(".aaa").html(img.src);
        return img.src;
    }
    reader.readAsDataURL(document.getElementById(sourceId).files[0]);
}

//2.把数字转换为金钱格式
//var num = 1012145;
//formatCash(num); 1,012,145
function formatCash(cash) {
    var str_cash = cash + ""; //转换成字符串
    var ret_cash = "";
    var counter = 0;
    for (var i = str_cash.length - 1; i >= 0; i--) {
        ret_cash = str_cash.charAt(i) + ret_cash;
        counter++;
        if (counter == 3) {
            counter = 0;
            if (i != 0) {
                ret_cash = "," + ret_cash;
            }
        }
    }
    return ret_cash;
}


//实现字符串长度截取并在结尾添加…
//cutstr("xuanfeng", 2)  //xu...
//cutstr("轩枫阁", 3)    //轩枫...

function cutstr(str, len) {
    var temp;
    var icount = 0;
    var patrn = /[^\x00-\xff]/;  //表示汉字或者全角，即ASCII 编码不在0-255的字符
    var strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len) {
            // 每次截取一个字符
            temp = str.substr(i, 1);
            if (patrn.exec(temp) == null) {
                // 如果是英文、半角
                icount = icount + 1
            } else {
                // 如果是中文、全角
                icount = icount + 2
            }
            // 字符串连接
            strre += temp
        } else {
            break
        }
    }
    return strre + "..."
}


//时间日期格式转换
//var date = new Date();
//date.Format("YYYY-M-D");    //2013-5-8
//date.Format("YYYY-MM-DD");  //2013-11-08
Date.prototype.Format = function(formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));
    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, (this.getMonth() + 1));
    str = str.replace(/w|W/g, Week[this.getDay()]);
    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());
    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());
    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());
    return str;
}


//设置cookie值
function setCookie(name, value, Hours) {
    var d = new Date();
    var offset = 8;
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = utc + (3600000 * offset);
    var exp = new Date(nd);
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=xuanfengge.com;"
}


//获取cookie值
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}


//用户判断给定的对象是否是数组
function isArray(o){
    return Object.prototype.toString.call(o)==='[object Array]';
}

//用来显示或隐藏一个DOM元素
//oDiv.onclick = toggle("id");
function toggle(obj){
    var el = document.getElementById(obj);  
    if ( el.style.display != 'none' ) {  
        el.style.display = 'none';  
    }
    else {  
        el.style.display = '';  
    }  
} 

/*
var myDate = new Date(); 
myDate.getYear(); //获取当前年份(2位) 
myDate.getFullYear(); //获取完整的年份(4位,1970-????) 
myDate.getMonth(); //获取当前月份(0-11,0代表1月) 
myDate.getDate(); //获取当前日(1-31) 
myDate.getDay(); //获取当前星期X(0-6,0代表星期天) 
myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数) 
myDate.getHours(); //获取当前小时数(0-23) 
myDate.getMinutes(); //获取当前分钟数(0-59) 
myDate.getSeconds(); //获取当前秒数(0-59) 
myDate.getMilliseconds(); //获取当前毫秒数(0-999) 
myDate.toLocaleDateString(); //获取当前日期 
myDate.toLocaleTimeString(); //获取当前时间 
myDate.toLocaleString( ); //获取日期与时间
*/



//实现checkbox全选与全不选
function checkAll() {
    var selectall = document.getElementById("selectall");
    var allbox = document.getElementsByName("allbox");
    if (selectall.checked) {
        for (var i = 0; i < allbox.length; i++) {
            allbox[i].checked = true;
        }
    } else {
        for (var i = 0; i < allbox.length; i++) {
            allbox[i].checked = false;
        }
    }
}


//获取下一个结点，兼容IE和Firefox
function getNextNode(node){ 
    node = typeof node == "string" ? document.getElementById(node) : node; 
    var nextNode = node.nextSibling; 
    if(!nextNode) return null; 
    if(!document.all){    
        while(true){ 
            if(nextNode.nodeType == 1){ 
                break; 
            } else { 
                if(nextNode.nextSibling){ 
                    nextNode = nextNode.nextSibling; 
                } else { 
                    break; 
                } 
            } 
        } 
    }   
    return nextNode;  
}; 

//getByClass、getById、getByTag
// demo:
//var oNav = get.byId("nav");
//var aLi = get.byTagName("li", oNav);
//var aSubNav = get.byClass("subnav", oNav);
var get={
  byId:function(id){
    return document.getElementById(id);
  },
  byClass:function(oParent,sClass){
    if(oParent.getElementsByClass){
      retuen (oParent||document).getElementsByClass(sClass);
    }else{
      var aClass=[];
      var reClass=new  RegExp("(^|)"+sClass+"( |$)");
      var aElem=this.byTag(oParent,"*");
      for(var i=0;i<aElem.length;i++){
        // reClass.test(aElem[i].className) && aClass.push(aElem[i]);
        if(reClass.test(aElem[i].className)){
          aClass.push(aElem[i]);
        }
      }
      return aClass;
    }
  },
  byTag:function(obj,elem){
    return (obj||document).getElementsByTagName(elem);
  }
}


//表单验证
    function verifyInput(regexp,input){
        var returnValue = regexp.test($.trim(input.val()));
        if(!returnValue){
            input.focus();
        }
        return returnValue;
    }

















