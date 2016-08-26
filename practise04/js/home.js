/**
 * Created by admin on 2016/8/25.
 */
// slide

(function () {
    var timer = null,
        index = 0;
    var slidePrev = document.getElementsByClassName("slide-prev")[0],
        slideNext = document.getElementsByClassName("slide-next")[0];
    // 启用图片自动切换
    startChangePic();
    // 图片自动切换
    function startChangePic() {
        timer = setInterval(function () {
            index++;
            slideChange();
            slideBtnChange();
        }, 2000);
    }
    // 停止图片自动切换
    function stopChangePic(){
        clearInterval(timer);
    }

    // 调整《 和 》
    function slideBtnChange() {
        if (index % 3 == 0) {
            slidePrev.style.background = "url('../img/slider-prev.png') no-repeat -31px top";
        } else if (index % 3 == 2) {
            slideNext.style.background = "url('../img/slider-next.png') no-repeat -31px top";
        }
        if (index % 3 != 0) {
            slidePrev.style.background = "url('../img/slider-prev.png') no-repeat left top";
        } else if (index % 3 != 2) {
            slideNext.style.background = "url('../img/slider-next.png') no-repeat left top";
        }
    }

    // slide 点击
    slidePrev.onclick = function () {
        if (index % 3 == 0) {
            return;
        } else {
            stopChangePic();
            index--;
            slideChange();
            slideBtnChange();
            startChangePic();
        }
    }
    slideNext.onclick = function () {
        if (index % 3 == 2) {
            return;
        } else {
            stopChangePic();
            index++;
            slideChange();
            slideBtnChange();
            startChangePic();
        }
    }
    function slideChange() {
        var slideword = document.getElementsByClassName("slide-word");
        var header = document.getElementsByTagName("header")[0];
        // 设置背景图
        header.style.background = "url(../img/slide-" + (index % 3 + 1) + ".jpg) no-repeat center top"
        // 设置文字
        for (var i = 0; i < slideword.length; i++) {
            slideword[i].className = "slide-word hide";
        }
        slideword[index % 3].className = "slide-word show";
    }
})();


