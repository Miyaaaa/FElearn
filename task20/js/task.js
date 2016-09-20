
var l_push = document.getElementById("l_push"),
    r_push = document.getElementById("r_push"),
    l_pop = document.getElementById("l_pop"),
    r_pop = document.getElementById("r_pop"),
    ipt = document.getElementById("ipt"),
    ipt_search = document.getElementById("ipt_search"),
    btn_search = document.getElementById("btn_search"),
    datas = [];
window.onload = function () {

    // 左输入
    l_push.onclick = function(){
        var vals = ipt.value.match(/[a-zA-Z0-9]+/g),
            i=0;
        while (i<vals.length){
            datas.splice(0,0,vals[i]);
            i++;
        }
        ipt.value = "";
        displayDatas(datas);
    };

    // 左侧出
    l_pop.onclick = function(){
        if(!datas.length){
            alert("no data to pop");
            return;
        }
        if(confirm("are you sure to delete")){
            alert("弹出数据："+datas[0]);
            datas.splice(0,1);
            displayDatas(datas);
        }else{
            return;
        }
    }

    // 右侧进
    r_push.onclick = function(){
        var vals = ipt.value.match(/[a-zA-Z0-9]+/g),
            i=0;
        while(i<vals.length){
            datas.push(vals[i]);
            i++;
        }
        ipt.value = "";
        displayDatas(datas);
    }

    // 右侧出
    r_pop.onclick = function(){
        if(!datas.length){
            alert("no data to pop");
            return;
        }
        if(confirm("are you sure to delete")){
            var num = datas.pop();
            alert("弹出数据："+num);
            displayDatas(datas);
        }else{
            return;
        }
    }
    // 显示数据
    function displayDatas(datas){
        var str = "";
        for(var i= 0,len=datas.length; i<len; i++){
           str += "<div class='data'>"+datas[i]+"</div>"
        }
        document.getElementById("display").innerHTML = str;
    }

    btn_search.onclick = function () {
        var searchstr = ipt_search.value.replace(/^\s+|\s+$/g,""),
            newDatas = [];
        if(searchstr !== ""){
            newDatas = datas.map(function(item){
                return item.replace(new RegExp(searchstr,"g"),"<span class='search'>"+searchstr+"</span>");
            });
            displayDatas(newDatas);
        }else{
            displayDatas(datas);
        }
    }


}
