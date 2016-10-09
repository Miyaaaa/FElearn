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
	4、.clone()复制节点
	   深度复制所有匹配的元素集合，包括所有匹配的元素、匹配元素的下级元素、文字节点。
