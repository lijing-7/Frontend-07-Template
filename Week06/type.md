##String--Grammar
###1.ASCII,Unicode字符集2.UTF编码方式
* 单双引号的区别
    * 双引号里可以加单引号为普通字符，单引号可以加双引号为普通字符
    * 双引号中使用双引号要使用转义字符"\"",单引号同理
    * 回车 "\n"
    * tab符 "\t"
    * 无特殊含义字符前面加反斜杠还为自己"\a" -> "a"
    * 反斜杠自身 "\\" -> "\"
    * bfnrtv
    * \HHH  -> 反斜杠后面紧跟三个八进制数（000到377），代表一个字符。HHH对应该字符的 Unicode 码点，比如\251表示版权符号。显然，这种方法只能输出256种字符。
    * \xHH -> \x后面紧跟两个十六进制数（00到FF），代表一个字符。HH对应该字符的 Unicode 码点，比如\xA9表示版权符号。这种方法也只能输出256种字符。
    * \uHHHH ->  \u后面紧跟四个十六进制数（0000到FFFF），代表一个字符。XXXX对应该字符的 Unicode 码点，比如\u00A9表示版权符号
* 反引号
    * ${变量}
    
   
    

