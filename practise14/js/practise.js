/**
 * Created by admin on 2016/8/17.
 */
window.onload = function(){
    var i,len,
        oNavA = document.getElementsByTagName("nav")[0].getElementsByTagName("a"),
        oDiv={};

    for(i=0,len=oNavA.length; i<len; i++){
        var str = oNavA[i].getAttribute("data-value");
        oDiv[str] = document.getElementsByClassName(str)[0];
    }
    // 给nav中a标签绑定事件
    for(i=0; i<oNavA.length;i++){
        oNavA[i].onclick = function () {
            for(var e in oDiv){
                oDiv[e].className = e+" hide";
            }
            oDiv[this.getAttribute("data-value")].className = this.getAttribute("data-value")+" show";
        };
    }
    // 给welcome中连接绑定事件
    var oWelA = document.getElementsByClassName("welcome")[0].getElementsByClassName("a-decoration");
    for(i=0; i<oWelA.length; i++){
        oWelA[i].onclick = function(){
            for(var e in oDiv){
                oDiv[e].className = e+" hide";
            }
            oDiv[this.getAttribute("data-value")].className = this.getAttribute("data-value")+" show";
        };
    }
    // 给site map中a标签绑定点击事件
    var oUlA = document.getElementsByClassName("site-map")[0].getElementsByClassName("a-decoration");
    for(i=0; i<oUlA.length; i++){
        if(oUlA[i].getAttribute("data-value") !== null && oUlA[i].getAttribute("data-value") !== ""){
            oUlA[i].onclick = function(){
                for(var e in oDiv){
                    oDiv[e].className = e+" hide";
                }
                oDiv[this.getAttribute("data-value")].className = this.getAttribute("data-value")+" show";
            };
        }
    }

}