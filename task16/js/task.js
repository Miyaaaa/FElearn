/**
 * Created by admin on 2016/8/8.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {},
    addBtn = document.getElementById("add-btn"),
    cityInput = document.getElementById("aqi-city-input"),
    valueInput = document.getElementById("aqi-value-input"),
    table = document.getElementById("aqi-table");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = cityInput.value.trim();
    var value = valueInput.value.trim();
    if(!city.match(/^[A-Za-z\u4e00-\u9fa5]+$/)){
        cityInput.value = "";
        alert("城市名为英文或中文字符，请重新输入");
        cityInput.focus();
        return;
    }
    if(!value.match(/^[0-9]+$/)){
        valueInput.value = "";
        alert("空气质量指数为整数，请重新输入");
        valueInput.focus();
        return;
    }
    aqiData[city] = value;
    cityInput.value = "";
    valueInput.value = "";
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var str = "<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>";
    for(var city in aqiData){
        str = str+"<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td></tr>";
    }
//    if(city){
//       table.innerHTML = str;
//    }else{
//        table.innerHTML = "";
//    }
    table.innerHTML = city ? str : "";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(oTr) {
    // do sth.
    var city = oTr.getElementsByTagName("td")[0].innerHTML;
    delete aqiData[city]; //删除属性city
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    addBtn.onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
//    var oTrs = table.getElementsByTagName("tr");
//    for(var i=1, len=oTrs.length; i<len; i++){
//        var btn = oTrs[i].getElementsByTagName("button")[0];
//        btn.addEventListener("click",delBtnHandle);
//    }
    table.addEventListener('click',function(event){
        event = event || window.event;
        if(event.target.nodeName.toUpperCase() === "BUTTON"){
            delBtnHandle.call(null, event.target.parentNode.parentNode);
        }
    });
}

init();