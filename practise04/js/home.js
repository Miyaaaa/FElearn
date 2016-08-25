/**
 * Created by admin on 2016/8/25.
 */
// slide
var timer = null,
    index = 1;
(function(){
    timer = setInterval(function(){

        var slideword = document.getElementsByClassName("slide-word");
        var header = document.getElementsByTagName("header")[0];
        // 设置背景图
        header.style.background = "url(../img/slide-"+(index%3+1)+".jpg) no-repeat center top"
        // 设置文字
        for(var i=0; i<slideword.length; i++){
            slideword[i].className = "slide-word hide";
        }
        slideword[index%3].className = "slide-word show";
        index++;
    },3000);
})();

// slide点击