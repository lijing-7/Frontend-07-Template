学习笔记

使用range实现dom精准操作|基本拖拽

1.使用range+cssom实现

·使用document上监听，即使移出浏览器外也可以产生捕捉鼠标的效果。

2.在正常流中的基本拖拽

·文字无分节点，必须使用range 找到可以拖拽的空位

·区分inline、block与inline-block 
