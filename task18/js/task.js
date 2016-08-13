/**
 * Created by Administrator on 2016/8/12.
 */
var l_push = document.getElementById("l_push"),
    r_push = document.getElementById("r_push"),
    l_pop = document.getElementById("l_pop"),
    r_pop = document.getElementById("r_pop"),
    iptnum = document.getElementById("iptnum"),
    datas = new Array();
window.onload = function () {

    // 左输入
    l_push.onclick = function(){
        if(checkIpt(iptnum.value)){
            datas.splice(0,0,parseInt(iptnum.value));
            iptnum.value = "";
        }else{
            iptnum.value="";
        }
        displayDatas();
    };

    // 左侧出
    l_pop.onclick = function(){
        if(!datas.length){
            alert("no data to pop");
            return;
        }
        if(confirm("are you sure to delete")){
            datas.splice(0,1);
            displayDatas();
        }else{
            return;
        }
    }

    // 右侧进
    r_push.onclick = function(){
        if(checkIpt(iptnum.value)){
            datas.push(iptnum.value);
            iptnum.value = "";
        }else{
            iptnum.value = "";
        }
        displayDatas();
    }

    // 右侧出
    r_pop.onclick = function(){
        if(!datas.length){
            alert("no data to pop");
            return;
        }
        if(confirm("are you sure to delete")){
            datas.pop();
            displayDatas();
        }else{
            return;
        }
    }

    function displayDatas(){
        var str = "";
        for(var i= 0,len=datas.length; i<len; i++){
            str += "<div class='num'>"+datas[i]+"</div>"
        }
        document.getElementById("display").innerHTML = str;
    }
    // 检查输入为数字
    function checkIpt(inpval){
        inpval = inpval.replace(/^\s+|\s+$/g,"");
        if(!inpval){
            alert("no input");
            return false;
        }
        if(!inpval.match(/^[0-9]+$/)){
            alert("incorrect data type, please input number");
            return false;
        }
        return true;
    }
}
