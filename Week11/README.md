学习笔记|Css总论
#1.Css语法研究
研究一门语言首先从语法做为切入点.
#2.Css @规则的研究
at-rules:@media、@keyframes、@fontface。
#3.Css规则的结构
#4.收集标准
官网：https://www.w3.org/TR----css
```
JSON.stringify(Array.prototype.slice.call(document.querySelector('#container').children).filter(e=>e.getAttribute("data-tag").match(/css/)).map(e=>({name:e.children[1].innerText,url:e.children[1].children[0].href})))
```
#5.总结
CSS语法
• at-rule
• selector
• variables
• value
• 实验
#6.选择器语法
    1.简单选择器
        *  通用选择器，相当于没有选择器
        div svg|a  div又叫类型选择器，即选择的是元素的tagName属性,文本字符串
            补充：HTMl有命名空间，主要有三个，
                1.HTML，命名空间间隔符为“：”
                2.SVG，命名空间间隔符为“|”，下同
                3.MathML，
        .class 可以用空白做分隔符，指定多个class
        #id 严格匹配
        [attr=value] 属性选择器
        :hover 伪类
        ::before 伪元素选择器
    2.复合选择器
        <简单选择器><简单选择器><简单选择器>
        * 或者 div 必须写在最前面
        伪类或伪元素必须写在最后面
    3.复杂选择器 --针对一个元素的结构进行选择
        <复合选择器><sp><复合选择器>  空格分隔表示子孙选择器，左侧必须有父级或者祖先节点
        <复合选择器>">"<复合选择器>  必须为他的直接上级父元素
        <复合选择器>"~"<复合选择器>  邻接关系进行选择
        <复合选择器>"+"<复合选择器>  邻接关系进行选择
        <复合选择器>"||"<复合选择器>  版本4 eg:table 中表示选中某一列

#7.选择器的优先级
    优先级的算法：
    
    　　每个规则对应一个初始"四位数"：0、0、0、0
    
    　　若是 行内选择符，则加1、0、0、0
    
    　　若是 ID选择符，则加0、1、0、0
    
    　　若是 类选择符/属性选择符/伪类选择符，则分别加0、0、1、0
    
    　　若是 元素选择符/伪元素选择符，则分别加0、0、0、1
    
    　　算法：将每条规则中，选择符对应的数相加后得到的”四位数“，从左到右进行比较，大的优先级越高。
    
    
    
    

