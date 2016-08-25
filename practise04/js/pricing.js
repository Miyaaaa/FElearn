/**
 * Created by admin on 2016/8/24.
 */
(function () {
    //设置价格列表虚线
    var dots = document.getElementsByClassName("dot");
    for(var i= 0,len=dots.length; i<len; i++){
        dots[i].style.marginLeft = (dots[i].parentNode.children[0].offsetWidth +5) +"px";
    }
}());