# jQuery #

## 1.jQuery设置样式
### 1.隐藏元素
    a.CSS display的值是none。
    b.type="hidden"的表单元素。
    c.宽度和高度都显式设置为0。
    d.一个祖先元素是隐藏的，该元素是不会在页面上显示
    e.CSS visibility的值是hidden
    f.CSS opacity的指是0
	PS: e、f两种情况，对于jQuery来说是:visivle，因为这两种情况下的元素仍占用空间布局（高度或宽度不为0）。其它的不可见情况是：hidden

### 2.html(),.text()和.val()的差异总结：  
    1、.html(),.text(),.val()三种方法都是用来读取选定元素的内容；只不过.html()是用来读取元素的html内容（包括html标签），.text()用来读取元素的纯文本内容，包括其后代元素，.val()是用来读取表单元素的"value"值。其中.html()和.text()方法不能使用在表单元素上,而.val()只能使用在表单元素上；另外.html()方法使用在多个元素上时，只读取第一个元素；.val()方法和.html()相同，如果其应用在多个元素上时，只能读取第一个表单元素的"value"值，但是.text()和他们不一样，如果.text()应用在多个元素上时，将会读取所有选中元素的文本内容。
    2、.html(htmlString),.text(textString)和.val(value)三种方法都是用来替换选中元素的内容，如果三个方法同时运用在多个元素上时，那么将会替换所有选中元素的内容。
    3、.html(function(index,oldhtml)),.text(function(index,oldtext)),.val(function(index,oldval))都可以使用回调函数的返回值来动态的改变多个元素的内容。

### 3.addClass
	1、直接传入类名字符串
	2、addClass(function(index, currentClass){})，函数返回要添加的类名
	   对jQuery对象（数组）的每个元素调用函数，currentClass是当前jQuery对象拥有的class（字符串）

## 2.jQuery操作DOM
### 1.添加节点
	1、添加子节点(末尾追加)
	   a .append(content)在匹配元素的一级子元素末尾追加content
	   b .appendTo(content)把匹配的所有元素都作为content的子元素
	2、添加子节点（前面添加）
	   a .prepend(content)在匹配元素的首部添加
	   b .prependTo(content)
	3、添加兄弟节点
	   a .before(content)在匹配元素的前面插入content
	   b .after(content)在匹配元素的后面插入content（content可为多个，用逗号隔开）
	   c (content).insertBefore(匹配对象) 跟.before作用相同，但content不支持多参数
	   d (content).insertAfter(匹配对象)

### 2.删除节点
	1、.empty() 不能删自己，清空内部
	   匹配对象.empty() 删除匹配对象的子节点，匹配对象本身还在
	2、.remove() 能删自己和内部
	   匹配对象.remove() 删除匹配对象的自身和内部一切，包括绑定的时间及与该元素相关的jQuery数据（防止内存泄漏）
	   .remove("条件")jQuery选择器，选择匹配对象下，特定条件的元素删除
	3、.detach() 暂时性删除
	   移除匹配对象，函数返回被删除的jQuery对象p。但只是显示效果没了（文档流中也没有）。该元素所绑定的事件、附加的数据都会保留，可用append(p)添加

### 3.
	4、.clone()复制节点
	   深度复制所有匹配的元素集合，包括所有匹配的元素、匹配元素的下级元素、文字节点。


## 3.jQuery事件
### 1.click  dbclick双击
	.click() 触发被选$对象集的点击事件
	.click(input_data, func) 给对象集中元素绑定点击事件
    	input_data(可选)：向事件处理函数传递数据
		function func(e){} 在func中通过e.data获取input_data.

### 2.鼠标事件
	mousedown() 鼠标按下时，鼠标所在元素触发
	mouseup() 鼠标释放时，鼠标所在元素触发
	click() 鼠标按下、释放为同一dom元素时触发
	不用管鼠标在按下后释放前的拖动

### 3.鼠标滑过
	mouseover() mouseout() 内部元素触发后，会继续冒泡到外部元素
	mouseenter() mouseleave()只在target上触发，不会冒泡
	hover(handlerIn, handlerOut) 相当于mouseenter+mouseleave的效果

### 4.焦点事件
	.focus() 当元素本身获得焦点
	.focusIn() 当元素内部中的元素获得焦点时，该元素触发。（冒泡）
	.blur()
	.focusOut()

### 5.change事件
	监听input、textarea值变化，值变，且失去焦点后触发
	单选框radio 复选框checkbox select 在用户做出选择后立即触发

### 6.文本select选中
	只针对input和textarea中的文本

### 7.提交事件。submit
	可触发的dom元素，<input type="submit"> <input type="image"> <button type="submit">
	回调函数返回false，阻止浏览器默认提交事件

### 8.on绑定事件
	1、$().on('事件名',data,function(){});
	   给元素绑定事件，传入data（不能为字符串，boolean number [] {} function）
	2、$().on('事件名1 事件名2'，data, function(){});
	   给多个事件绑定同一函数
	3、$().on({事件名1:func1, 事件名2:func2},data)	
	   给元素不同事件绑定不同函数
	4、事件委托
	   $().on('事件名','selector',data,function) 把选择器对象的事件委托给上层
	   $对象事件发生时，不触发function
	   只有$对象：selector对象事件发生时，会冒泡到$对象，触发function 但e.target仍是selector对象
	5、off卸载on绑定的事件
	   $().off() 若传入事件名，则卸载该事件，若不传入，卸载所有

### 9.trigger程序触发事件
	1、 .trigger('事件名1 事件名2'，data) 触发事件，并传入参数
	2、 自定义事件 .on('自定义事件名',function(){}) .trigger('自定义事件名',data)
	3、会向上冒泡

### 10.triggerHandler()
    1、triggerHandler不会触发浏览器的默认行为，.triggerHandler( "submit" )将不会调用表单上的.submit()
    2、.trigger() 会影响所有与 jQuery 对象相匹配的元素，而 .triggerHandler() 仅影响第一个匹配到的元素
    使用 .triggerHandler() 触发的事件，并不会在 DOM 树中向上冒泡。 如果它们不是由目标元素直接触发的，那么它就不会进行任何处理
    3、与普通的方法返回 jQuery 对象(这样就能够使用链式用法)相反，.triggerHandler() 返回最后一个处理的事件的返回值。如果没有触发任何事件，会返回 undefined

### 11.event事件对象
	event.target 是当前触发事件的元素，可能是绑定对象及其子元素  
	event.currentTarget==this : 在事件冒泡过程中的当前DOM元素
	this和event.target的区别：js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远是直接接受事件的目标DOM元素；

## 4.jQuery动画
### 1.stop停止动画
	在同一匹配元素上触发多个animate,这些动画组成一个队列，依次执行。
	stop() 会停止第一个animate,后面的animate会继续执行。
	stop(true) 停止所有的动画，把队列清空
	stop(true,true) 停止所有的动画，直接跳到第一个动画的最终状态

### 2.index()返回索引
	$().index() 匹配元素的第一个 在同辈元素中的位置
	$().index(一个dom元素或者一个jQuery对象) 参数是匹配元素的第几个
	$().index($(selector))  $(selector)中第一个元素是匹配元素的第几个

	