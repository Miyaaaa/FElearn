# 深入浅出javascript #

---


## 一.数据类型
### 1.六种数据类型
	number
	boolean
	String
	null
	undefined
	object (Function Date Array)

### 2.隐式转换
	null == undefined 相等
	number == string 把string类型先转换成number类型
	boolean == ? 把boolean类型转换成number（0或1）
	object == number|string 把object转换成基本类型

### 3.包装类型
	当尝试对一个基本类型数据的属性进行操作（添加属性，或者访问属性）时，javascript会智能地根据当前的基本数据类型， 封装一个临时对象。但是用完即毁。

### 4.检测数据类型
	1、typeof 用于基本类型和函数的检测
	   typeof null => object
	   typeof undefined => undefined
       typeof NaN => number
       typeof function => function
	2、A instanceof B 基于原型链检测对象类型
	   A: 对象(若为基本类型，返回false)
	   B: 函数对象 | 函数构造器（若不是，抛出type error异常）
	   判断对象A的原型链是否有B（函数构造器 ）的prototype属性
	3、constructor

## 2.运算符
### 1.定义属性
	1、普通
	   var obj={x:1}
	   obj.y = 2
	2、defineProperty
	   Object.defineProperty(obj, 'x', {configurable:false, value:1});// 修改对象变量的属性 属性x不可delete

### 2.try...catch...finally语句
	在try{}中抛出异常，在最近的一个catch捕捉，finally中的语句一定会执行
	try{
		try{} //内层try抛出异常，若内层有catch，则由该catch捕获，否则由外层的catch捕获
	}catch{
	}finally{
	}

### 3.函数
	函数声明 function fd(){} 在声明之前调用函数可用
	函数表达式 var fe = function(){} 在表达式之前不可调用函数

### 4.严格模式
	1、不能用with 可将深层次的对象复制给一个变量
	2、在函数中，对没声明的变量赋值会报错。而不是在window对象上加属性
	3、arguments变为参数的静态副本。
		但若传入对象，对象不可改（引用），但是对象里的属性可改
		function func(a){
			arguments[0] = 1; // 不会改变a的值
			arguments[0].x = 3; // 会影响对象a的值
		}
	4、在函数中不可delete 变量和参数、不可配置的属性（delete可删除对象属性）

## 3.对象
### 1.属性
	对象属性