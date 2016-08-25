/**
 * Created by admin on 2016/8/25.
 */
window.onload = function(){
    // 给导航绑定鼠标滑过事件
    var index1,
        index2,
        index3,
        index4,
        navLis = document.getElementsByClassName("nav-li"),
        subnavLis = document.getElementsByClassName("subnav-li");
    for(index1=0;index1<navLis.length;index1++){
        navLis[index1].onmouseover = function(e){
            mouseover(this);
        }
        navLis[index1].onmouseout = function () {
            mouseout(this);
        }
    }
    for(index3=0;index3<subnavLis.length;index3++){
        subnavLis[index3].onmouseover = function(e){
            mouseover(this);
        }
        subnavLis[index3].onmouseout = function(){
            mouseout(this);
        }
    }
    function mouseover(that){
        var childs = that.children;
        for(index2=0;index2<childs.length;index2++){
            if(childs[index2].tagName.toLocaleLowerCase() == "ul"){
                childs[index2].style.display = "block";
                childs[index2].style.marginTop = "5px";
            }

        }

    }
    function mouseout(that){
        var childs = that.children;
        for(index4=0;index4<childs.length;index4++){
            if(childs[index4].tagName.toLocaleLowerCase() == "ul"){
                childs[index4].style.display = "none";
            }
        }
    }



}