function match(string){
    let state = start;
    for (let s of string){
        state = state(s);
    }
    return state === end;
}

function start(s){
    if (s === 'a')
        return foundA;
    else
        return start;

}

function end(s){
    if (s === 'x')
        return end
    else
        return start(s);
}

function foundA(s){
    if (s === 'b')
        return end;
    else
        return start(s);
}

console.log(match('abababx'))


//可选作业：我们如何用状态机处理完全未知的 pattern？ （参考资料：字符串 KMP 算法 https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm）