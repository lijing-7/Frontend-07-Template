function kmp(source,pattern){
    //計算table
    let table = new Array(pattern.length).fill(0);

    //abcdabce；aabaaac
    //块级作用域{ } i,j
    {
        //i:标记自重复开始位置，j:表示已重复字符的长度
        let i = 1, j = 0;
        while(i < pattern.length){
            if (pattern[i] === pattern[j]){
                ++i,++j;
                table[i] = j;
            }else{
                if (j>0)
                    j = table[j];
                else
                    ++i;
            }
        }
    }

    //匹配
    {
        //i代表source开始字符位置，j代表pattern字符开始的位置
        let i = 0, j = 0;
        while(i < source.length){
            if (pattern[j] === source[i]){
                ++i,++j;
            }else{
                if (j>0)
                    j = table[j];
                else
                    ++i;
            }
            if (j===pattern.length)
                return  true;
        }
        return false;
    }
}

console.log(kmp("asdasdaabaaac","aabaaac")) ;
