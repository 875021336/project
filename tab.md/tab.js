/*面向对象写法：*/
    //1、创建构造函数
    function Tab(targetID){
        // 2、把变量变成对象的属性
        this.tab=document.getElementById(targetID);
        this.spans=this.tab.getElementsByTagName('span');
        this.lis=this.tab.getElementsByTagName('li');
        this.prevIndex=0;//上次显示元素下标&第一次点击时需要清除样式的下标
        var _this=this;//此时this指向实例对象
        for (var i = 0; i < this.spans.length; i++) {
            this.spans[i].index=i;
            this.spans[i].onclick=function(){
                _this.clickTab(this);//此时this指向点击的span
                _this.prevIndex=this.index;//实现点击操作后，保存点击对象的下标
            }
        }

    }
    // 3、把函数变成对象的方法
    Tab.prototype.clickTab=function(target){//target指向点击的span
        //this.prevIndex-上次显示元素下标
        this.spans[this.prevIndex].className='';
        this.lis[this.prevIndex].className='';
        this.spans[target.index].className='select';
        this.lis[target.index].className='show';
    }
    //4、实例对象
    var tab=new Tab('tab');
    var tab2=new Tab('tab2');