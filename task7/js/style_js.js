/**
 * Created by Administrator on 2016/7/24.
 */
$(function(){
    var div4_pic1_width = $("#div4_pic1").width();
    var div4_form_width = $("#div4_form").width();
    $("#div4_form").css("left",(div4_pic1_width-div4_form_width)/2+"px");
});
function selclick(objstr){
    switch(objstr){
        case "country":
            forselect(objstr,"for_country");break;
        case "province":
            forselect(objstr,"for_province");break;
        case "city":
            forselect(objstr,"for_city");break;
    }
}
function forselect(selstr, ulstr){
    //设置对应ul左上角位置
    var selleft = document.getElementById(selstr).offsetLeft;
    var seltop = document.getElementById(selstr).offsetTop;
    $("#"+selstr).css("border" ,"1px solid #e74f4d");
    $("#"+selstr).css("borderBottom", "none");
    $("#"+ulstr).removeClass("hide");
    $("#"+ulstr).css("left","275px");
}
