/**
 * Created by admin on 2016/8/8.
 */
/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = ''
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
    },
    form_gra_time = document.getElementById("form-gra-time"),
    city_select = document.getElementById("city-select"),
    aqi_chart_wrap = document.getElementById("aqi-chart-wrap"),
    time_radio = form_gra_time.getElementsByTagName("input");//获取日期粒度的单选按钮


// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    // 确定是否选项发生了变化
    for(var i= 0,len=time_radio.length; i<len; i++){
        if(time_radio[i].checked){
            if(pageState.nowGraTime === time_radio[i].getAttribute("value")){
                return;
            }
            pageState.nowGraTime = time_radio[i].getAttribute("value");
            renderChart();
        }
    }
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    // 确定是否选项发生了变化
    var index = city_select.selectedIndex;//获取选中option的索引
    if(index == pageState.nowSelectCity){
        return;
    }
    // 设置对应数据
    pageState.nowSelectCity = index;
    // 调用图表渲染函数
    renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    if(form_gra_time.addEventListener){
        form_gra_time.addEventListener("click", function(event){
            event = event||window.event;
            if(event.target.nodeName.toLowerCase() === "input"){
                graTimeChange();
            }
        },false);
    }else if(form_gra_time.attachEvent){
        form_gra_time.attachEvent("onclick", function(event){
            event = event||window.event;
            if(event.srcElement.nodeName.toLowerCase() === "input"){
                graTimeChange();
            }
        });
    }else{
        form_gra_time.onclick = function(event){
            event = event||window.event;
            if(event.target.nodeName.toLowerCase() === "input" || event.srcElement.nodeName.toLowerCase() === "input"){
                graTimeChange();
            }
        };
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var str_select = "";
    for(city in aqiSourceData){
        str_select = str_select+"<option value="+city+">"+city+"</option>"
    }
    city_select.innerHTML = str_select;
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    if(city_select.addEventListener){
        city_select.addEventListener("change", citySelectChange, false);
    }else if(city_select.attachEvent){
        city_select.attachEvent("onchange", citySelectChange);
    }else{
        city_select.onchange = citySelectChange;
    }
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    var city_index = pageState.nowSelectCity,
        
        gratime = pageState.nowGraTime;
    if(gratime === "week"){

    }else if(gratime === "month"){

    }else{

    }

    console.log(aqiSourceData);
    // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
}

init();