学习笔记
####7.手势与动画|实现鼠标操作
    ·touchcancel 与  touchend 的区别
        touchcancel 表示触屏事件结束是以一个异常的模式去结束的，被系统打断
        touchend 是表示正常的 start - move - end 序列结束
####8.手势与动画|实现手势逻辑
    start时关心的三件事
        1.是否直接end
        2.是否有直接移动10px
        3.是否按压时间0.5s
####9.手势与动画|处理鼠标事件
    监听鼠标mousedown的事件 
        -- event.button  表示那个键被按压下
        -- event.buttons 表示按下的键有哪些，通常用掩码表示
    移位运算
####10.手势与动画|派发事件

    dom中的事件派发 是一种使用new event 然后再加上一些属性 最后派发出去   