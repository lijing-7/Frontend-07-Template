##作业：找出 JavaScript 标准里面所有具有特殊行为的对象
* Array: 具有自动计算长度的对象集合。
* Function: 具有方法和执行能力的对象。
* Arguments: 函数内具有实体的形参。
* Map: 引用地址为key的对象。
* Set: 自动去重的Array对象集合。
* String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
* 模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
* Object.prototype   所有对象的默认原型，无法再给它设置原型
##
  Array：Array 的 length 属性根据最大的下标自动发生变化。
  Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
  Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
  模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
  类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
  bind 后的 function：跟原来的函数相关联。