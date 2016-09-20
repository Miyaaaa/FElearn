/**
 * Created by admin on 2016/9/8.
 */
window.onload = function () {
    var numArr = [];
    var iptsection_child = document.getElementsByClassName("ipt-section")[0].children,
        displayul = document.getElementsByClassName("display")[0].children[0],
        liarr = displayul.children;
    iptsection_child[1].onclick = function(){
        var iptvalue = parseInt(iptsection_child[0].value);
        if(!(iptvalue <= 100 && iptvalue >= 10)){
            alert("the number exceeds allowable range (10, 100)");
            iptsection_child[0].value = "";
        }else{
            if(numArr.length <= 60){
                numArr.push(iptvalue);
                // 添加数据后显示
                var li = document.createElement("li");
                li.setAttribute("data-num",iptvalue);
                li.setAttribute("data-index",numArr.length);
                li.style.height = iptvalue*3 + "px";
                displayul.appendChild(li);

                iptsection_child[0].value = "";
                console.log("array: "+numArr);
            }else{
                alert("there are already sixty numbers");
            }
        }
    }
    iptsection_child[2].onclick = function(){
        console.log("before sort: "+numArr);
        selectionSort();
        console.log("after sort: "+numArr);
    }
    iptsection_child[3].onclick = function(){
        bubbleSort();
    }
    iptsection_child[4].onclick = function(){
        quickSort();
    }
    iptsection_child[5].onclick = function(){
        insertionSort();
    }


    // 选择排序
    var timer, // 选择
        timer2, //冒泡
        timer3; // 插入
    function selectionSort(){
        var i=0, j,len=liarr.length,minvalue,minindex;

        timer = setInterval(function () {

            if(i == len-1){
                clearInterval(timer);
            }

            minvalue = liarr[i].offsetHeight;
            minindex = i;
            for(j=i+1; j<len; j++){
                if(liarr[j].offsetHeight < minvalue){
                    minvalue = liarr[j].offsetHeight;
                    minindex = j;
                }
            }
            if(minindex !== i){
                swap(i,minindex);
            }

            i++;
        }, 1000)
    }

    // 快排
    function quickSort(arr, left, right){
        alert("hai mei shi xian");
        var key = arr[left],temp,
        i = left,
        j = right;
        while (i<j){
            while(arr[j]>key){
                j--;
            }
            if(i<j){
                temp = arr[j]
            }
            while(arr[i]<key){
                i++;
            }
        }
    }

    // 插入
    function insertionSort(){
        var i=0, j, temp="next", len=numArr.length;
        timer3 = setInterval(function () {
            if(i===len-1 && temp==="next"){
                clearInterval(timer3);
            }
             if(numArr[j] > temp){ // 若
                swap(j, j+1);
                if(j === 0){
                    temp = "next";
                }
            }else if(numArr[j] <= temp){
                temp = "next";
            }
            if(temp === "next"){
                i++;
                temp = numArr[i]; // temp 为当前要插入值
                j=i;
            }
            j--;
        }, 1000);
    }
    // 冒泡
    function bubbleSort(){
        var i=0,
            j = liarr.length-1;
        timer2 = setInterval(function(){
            if(j == 1){
                clearInterval(timer2);
            }
            if(i == j){
                j--;
                i = 0;
            }
            if(numArr[i] > numArr[i+1]){
                swap(i,i+1);
            }
            i++;
        }, 1000);
    }

    // 交换
    function swap(i,j){
        var temp = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = temp;
        liarr[i].style.height = liarr[j].offsetHeight + "px";
        liarr[j].style.height = temp*3 + "px";
    }
    // 展示数据
    function displayArrData(numArr){
        var i,
            len = numArr.length,
            htmlStr="";
        displayul.innerHTML = "";
        for(i=0; i<len; i++){
            htmlStr += "<li data-num='"+ numArr[i] +"' data-index='"+ i +"' style='height: "+ numArr[i]*3 +"px'></li>";
        }
        document.getElementsByClassName("display")[0].children[0].innerHTML = htmlStr;
    }
}
