/**
 * Created by Administrator on 2016/7/30.
 */
window.onload = function () {
    var dateset = {'date':[{'src':'p_00.jpg'},{'src':'p_01.jpg'},{'src':'p_02.jpg'},{'src':'p_03.jpg'},{'src':'p_04.jpg'}]};
    waterfall('main','box');
    //拖动滚动条，加载图片
    window.onscroll = function(){
        var o_parent = document.getElementById("main");
        if(checkScroll){
            //将dateset里面的图片添加到页面尾部
            for(var i=0; i<dateset.date.length; i++){
                var o_box = document.createElement("div");
                o_box.className = 'box';
                o_parent.appendChild(o_box);
                var o_pic = document.createElement("div");
                o_pic.className = 'pic';
                o_box.appendChild(o_pic);
                var o_img = document.createElement("img");
                o_img.src='./img/'+dateset.date[i].src;
                o_pic.appendChild(o_img);
            }
            waterfall('main','box');
        }
    }
}
function waterfall(parent,box){

    //获取所有的box
    var all_box = getByClass(parent, box);
    //设置main的宽度，水平居中
    var clientW = document.documentElement.clientWidth;
    var boxW = all_box[0].offsetWidth;
    var cols = parseInt(clientW/boxW);
    var o_parent = document.getElementById(parent);
    o_parent.style.width = boxW*cols+'px';
    o_parent.style.margin = '0 auto';
    //第一排图片排好后，后面图片依次添加到前高度最小的列
    var cols_h = new Array();
    for(var i=0; i<all_box.length; i++){
        if(i<cols){
            cols_h.push(all_box[i].offsetHeight);
        }else{
            //找出当前col_h最小值，及其所对应的列
            var min_h = Math.min.apply(Math,cols_h);
            var min_index = getMinHIndex(cols_h,min_h);
            //设置box样式
            all_box[i].style.position = 'absolute';
            all_box[i].style.top = min_h+'px';
            all_box[i].style.left = min_index*boxW+'px';
            cols_h[min_index] += all_box[i].offsetHeight;
        }
    }
}

//在id为parent的父元素下，获取class为box的所有元素
function getByClass(parent,box){
    var o_parent = document.getElementById(parent);
    var all_ele = o_parent.getElementsByTagName('*');
    var all_box = new Array();
    for(var i=0; i<all_ele.length; i++){
        if(all_ele[i].className == box){
            all_box.push(all_ele[i]);
        }
    }
    return all_box;
}
//找数组中最小值的index
function getMinHIndex(cols_h,min_h){
    for(i=0; i<cols_h.length; i++){
        if(cols_h[i] == min_h){
            return i;
        }
    }
}
function checkScroll(){
    var all_box = getByClass('main','box');
    var last_box_h = all_box[all_box.length-1].offsetTop + parseInt(all_box[all_box.length-1].offsetHeight/2)
    var scroll_top = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    var scroll_h = scroll_top + height;
    return (last_box_h<scroll_h)?true:false
}
