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

    };
    // 检查输入为数字
    function checkIpt(){
        var inpval = iptnum.value.replace(/^\s+|\s+$/g,"");
        if(!inpval.match(/^[0-9]+$/)){
            alert("incorrect data type, please input number");
        }
    }
}
