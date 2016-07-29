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
        case "div_country":
            forselect(objstr,"ul_country");break;
        case "div_province":
            forselect(objstr,"ul_province");break;
        case "div_city":
            forselect(objstr,"ul_city");break;
    }
}
function forselect(divstr, ulstr){
    //设置对应ul左上角位置
    $("#"+divstr).css("border" ,"1px solid #e74f4d");
    $("#"+divstr).css("borderBottom", "none");
    $("#"+ulstr).removeClass("hide");
}

