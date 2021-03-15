学习笔记
#浏览器总论|浏览器工作原理总论
URL——http——>>HTML——parse——>>DOM——CSS computing——>>DOM with CSS——layout
——>>DOM with position——render——>>Bitmap(位图)
Bitmap传给显卡驱动设备转换为人眼识别的光信号。
##状态机
##浏览器工作原理之Http的解析协议
    1.ISO-OSI七层网络模型（物数网传会表应）
           传输层-tcp-require("net")
           会话层+表示层+应用层-http-require("http")
    2.TCP/IP
    3.http
        ·Request
        ·Response
 ###第一步 HTTP请求总结
    · 设计一个http请求的类
    · content-type 是一个必要的字段，要有默认值
    · body 是KV格式
    · 不同的content-type影响body的格式
 ###第二步 send函数总结
    · 在request的构造器中收集必要的信息
    · 设计一个send函数，把请求真实发送到服务器
    · send 函数应该是异步的，所以返回Promise
 ###第三步 发送请求   
    · 设计支持已有的connection 或者自己新建connection
    · 收到数据传给parser
    · 根据parser 的状态 resolve Promise 
 ###第四步 ResponseParser 总结
    · responser必须分段构造，所以我们要用一个ResponseParser来装配
    · ResponseParser分段处理ResponseText，我们用状态机来分析文本结构
 ###第五步 BodyParser总结
    · Response 的body 可能根据Content-Type有不同的的结构，因此采用子parser的结构来解决问题
    · 以TrunkedBodyParser为例，同样采用状态机来处理body的格式

#其他
####for……of…… 和 for……in…… 的区别
#####1.for……of……
· 循环数组，字符串
#####2.for……in……
· 循环对象，
####不使用状态机下处理字符串方法
· 1.str.indexOf(target) > -1
· 2.str.includes(target);
· 3.str.split('').find(item => item === 'a');
· 4.str.split('').findIndex(item => item === 'a') > -1;
````
(function(){})是表达式，function(){}不是，所以前面需要用void 或者+ ~ - ! 或者括号，转为表达式
    +function(){ }()
    -function(){ }()
    !function(){ }()
    ~function(){ }()
    viod function(){ }()
    (function(){ })()
    (function(){ }())
   