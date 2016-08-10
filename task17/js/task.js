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
var citys = [];

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: 0,
    nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
    var city = citys[pageState.nowSelectCity],//当前选中城市
        gratime = pageState.nowGraTime,//当前时间粒度
        datas = chartData[city][gratime],//需要渲染的数据array类型
        div_class = gratime+"_div",
        chart_str = "",
        len=datas.length,
        colors =['#87d4d4','#0a4242','#7836d1','#baa1db','#3e1674','#a12d12','#dd8672',
                '#488f0f','#455c33','#d3d124','#d39324'],
        color_len = colors.length;
    for(var i=0; i<len; i++){
        chart_str += "<div class="+div_class+" style=\"height:"+datas[i]+"px;background-color:"+colors[i%color_len]+ "\"></div>";
    }
    console.log(chart_str);
    aqi_chart_wrap.innerHTML = chart_str;
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
        str_select = str_select+"<option value="+city+">"+city+"</option>";
        citys.push(city);
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
    var original_datas,
        arr_day=new Array(), //以天为粒度数据块
        arr_week = new Array(), //周
        i_week= 0,sum_week=0,
        sum_month= 0,i_month= 0,
        arr_month=new Array(), i,len;//月
    for(var city in aqiSourceData){
        original_datas = aqiSourceData[city];

        for(var date in original_datas){
            // 设置以天为粒度的数据 {"day": [day1,day2...]}
            arr_day.push(original_datas[date]);
            // 设置以月为粒度
            sum_month += original_datas[date];
            i_month++;
            if(date === "2016-01-31" || date === "2016-02-29" || date === "2016-03-31"){
                arr_month.push(parseInt((sum_month/i_month)));
                sum_month = 0;
                i_month = 0;
            }
        }

        // 设置以周为粒度的数据 {"week": [day1,day2...]}
        // 先刨去前三天（2016-1-1是周五
        arr_week.push(parseInt((arr_day[0]+arr_day[1]+arr_day[2])/3));
        // 剩下的以7天唯一周期
        for(i=3,len=arr_day.length; i<len; i++){
            sum_week += arr_day[i];
            i_week++;
            if(i_week === 7){
                i_week = 0;
                arr_week.push(parseInt((sum_week/7)));
                sum_week = 0;
            }
            if(i === len-1 && i_week !== 0){
                arr_week.push(parseInt(sum_week/i_week));
                i_week = 0;
                sum_week = 0;
            }
        }
        chartData[city] = {"day":arr_day,"week":arr_week,"month":arr_month};
        arr_day = [];
        arr_week = [];
        arr_month = [];
    }
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