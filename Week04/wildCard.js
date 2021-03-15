function find(source, pattern) {
    let startCount = 0;
    //查出多少个*号
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "*") {
            startCount++;
        }
    }
    //考虑边界没有*的情况
    if (startCount === 0) {
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] !== source[i] && pattern[i] !== '?')
                return false;
        }
        return;
    }

    //i代表pattern的位置
    let i = 0;
    //lastIndex 代表源字符串source的位置
    let lastIndex = 0;

    //匹配第一个星号之前的字符
    for (i = 0; pattern[i] !== '*'; i++) {
        if (pattern[i] !== source[i] && pattern[i] !== '?')
            return false;
    }

    //pattern 和 source 在第一个*号之前为一一对应的关系
    lastIndex = i;

    for (let p = 0; p < startCount - 1; p++) {
        i++;
        let subPattern = "";
        while (pattern[i] !== "*") {
            subPattern += pattern[i];
            i++;
        }

        //将字符串里的？替换为正则表达式里的s，S，代表也是任意字符匹配，
        let reg = new RegExp(subPattern.replace(/\?/g, "[\\s\\S]"), "g");
        //正则lastIndex属性决定exec时从那个位置开始
        reg.lastIndex = lastIndex;

        if (!reg.exec(source))
            return false;

        // console.log(reg.exec(source));
        lastIndex = reg.lastIndex;

    }

    //匹配最后一个星号，从后往前循环
    for (let j = 0; j <= source.length - lastIndex && pattern[pattern.length - j] !== "*"; j++) {
        if (pattern[pattern.length - j] !== source[source.length - j] && pattern[pattern.length - j] !== "?")
            return false;
    }

    return true;

}

console.log(find("abcaabcdsghgdsdfkt", "sg*d*k"));