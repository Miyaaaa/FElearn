/**
 * Created by Administrator on 2016/7/30.
 */
$(window).on('load',function(){
    var dateset = {'date':[{'src':'p_00.jpg'},{'src':'p_01.jpg'},{'src':'p_02.jpg'},{'src':'p_03.jpg'},{'src':'p_04.jpg'}]};
    waterfall();
    $(window).on('scroll',function(){
        if(checkScroll()){
            $.each(dateset.date,function(src,value){
                var box = $('<div>').addClass('box').appendTo($('#main'));
                var pic = $('<div>').addClass('pic').appendTo($(box));
                $('<img>').attr('src','./img/'+$(value).attr('src')).appendTo($(pic));
            })
            waterfall();
        }
    });
})
function waterfall(){
    var $all_box = $("#main>div");//找main的第一代div子元素
    var $box_w = $all_box.eq(0).outerWidth();
    var cols = parseInt($(window).width()/$box_w);
    $("#main").width(cols*$box_w).css("margin","0 auto");
    var colsH = new Array();
    for(var i in $all_box){
        if(i<cols){
            colsH.push($all_box.eq(i).outerHeight());
        }else{
            var minH = Math.min.apply(Math,colsH);
            var minIndex = $.inArray(minH,colsH); //minH出现索引
            $all_box.eq(i).css({
                'position':'absolute',
                'top':minH+'px',
                'left':minIndex*$box_w +'px'
            });
            colsH[minIndex] += $all_box.eq(i).outerHeight();
        }
    }

}
function checkScroll(){
    //取最后一个box
    var $last_box = $('#main>div').last();
    var $last_box_h = $last_box.offset().top+parseInt($last_box.outerHeight()/2);
    var scroll_top = $(window).scrollTop();
    var document_h = $(window).height();
    return ($last_box_h < scroll_top+document_h)?true:false;
}