# 精通css
---


## 第三章
### 1.外边距叠加
    只有普通文档流中块框的*垂直*外边距才会叠加。行内框、浮动框、绝对定位框之间的外边距不会叠加。
	作用：几个段落组成的文本页面，处于中间的段落外边距叠加。
	
	e.g <div style="margin:10px"><p style="margin:20px">This is ...</p></div>
### 2.行内块
	可设 水平内边距 边框 外边距
	高度无法设置，垂直内边距 边框 外边距 显示设置高度也没用
### 3.清除浮动
	.clear:after{  /*清除浮动*/
		content:"."; 
		height:0;
		visibility:hidden;
		display:block;
		clear:both;
	}
	添加在需要清除浮动的元素上。
	PS：浮动可制造文字环绕图片的效果。
### 4.背景图片定位
	若是像素，就用图片左上角作为基点 
	e.g 20px 30px 背景图片左上角 距离元素左边20px 上边30px
	若是百分比，不以图片左上角作基点
	e.g 20% 30% 背景图片（20% 30%）的点与元素（20% 30%）的点重合
### 5.锚样式顺序
	将已访问过的链接标记，避免用户“回溯”操作
	:link :visited
	:hover  :focus  :active
### 6.锚各状态下样式
	锚的各个状态下，把不同的背景放在同一张图片中，通过移动背景图片来更改背景样式。
	服务器的请求数量会对站点性能造成很大影响。
### 7.远距离翻转
	鼠标悬停事件，触发页面**其他**地方的显示发生变化
	处理：把这两个放在一个框内，再分别绝对定位，加样式
### 8.网页内容居中
	适应各种宽度屏幕，网页内容设定为定宽，并居中。
	body{
		text-align:center;
	}
	.wrapper{
		width:980px; /*设定宽度*/
		margin:0 auto;
		text-align:left;
	}
### 9.多列布局
	两列：
		.primary 
		.secondary
		先写一个页面的主要部分，再写次要部分（在浏览器解析时先显示主要部分）
		两个部分各自设定宽度，用float来进行左右布局，中间自然留空（避免一个部分多出点宽度会讲另一部分挤下去）
	三列：
		在.primary内部再嵌套.primary和.secondary
	这样方便控制布局
### 10.流式布局 / 相对于浏览器宽度
	不用固定宽度，而是采用百分比 .wrapper{width:76.8%;}
	边距也尽量采用百分比
	再设定一个min-width（em单位）避免太窄，影响排版美观
### 11.弹性布局 / 相对于字号
	以em为单位设置宽度 .wrapper{width:92em;}
	内部布局仍采用百分比.
### 12.获取外部样式值
	obj.style.width 只能获取内联样式的值（html文件标签中用属性style="width: 值px"），无法获取到link标签引入的css文件中的width值。
    要想获取外部文件中定义的样式属性值，需用下面函数
	function getStyle(obj, attr){ // attr属性名 "width" "borderWidth" "fontSize" 
    	if(obj.currentStyle){
    	    return obj.currentStyle(attr); // IE
    	}else{
        	return getComputedStyle(obj, false)[attr]; // Firefox chrome ...
    	}
	}
### 13.offset*
	obj.offsetWidth并不是obj内容的width，它 == padding + borderwidth + contentWidth != obj.style.width