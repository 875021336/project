预览地址：http://js.jirengu.com/tizugamoqi/1/edit?output

# 面向对象Tab组件
1.易维护：采用面向对象思想设计的构造，可读性高，由于继承的存在，即使改变需求，那么维护也只是在局部模块，所以维护起来是非常方便和降低成本的。

2.质量高：在设计时，可重用现有的，在以前项目的领域中被测试过的类，使系统满足业务需求并具有较高的质量。

3.效率高：在软件开发时，根据设计的需求对现实世界的事物进行抽象，产生类。使用这样的方法解决问题，接近日常生活和自然的思考方式，势必提高软件开发的效率和质量。

4.易扩展：由于继承、封装、多态的特性，自然设计出高内聚、低耦合的系统结构，使得系统更灵活、更容易扩展，而且成本较低。

# TAb切换思路一:
判断是否为当前点击对象，来增加类名和减少类名
要在面向过程的基础上改写成面向对象的方法，需要经过四个步骤：
1、创建构造函数
2、将变量变成对象的属性
3、将函数变成对象的方法
4、实例对象

# # TAb切换思路二:
获取当前点击对象的索引，直接给其增加类名
```
function Tab (node){
  this.init();
  this.bind();
}

Tab.prototype = {
    constructor: Tab,
    init: function(){

    },
    bind: function(){

    },
    ...
}

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new People(document.querySelectorAll('.tab-container')[1]);
```