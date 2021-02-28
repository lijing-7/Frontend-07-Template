
/*
* 构造树思路
* 1.遍历data数组
* 2.找到当前元素的父元素
* 3.在父元素对象上添加一个对该子元素的引用
* 4.元素如果没有父元素，那我们就认为它是树的根节点
* */

const data = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: 2 },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
    { id: 25, parentId: 1 },
    { id: 30, parentId: 25 },
];

//建立 ID-数组索引映射关系：为了方便找到父元素的引用
const idMapping = data.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
}, {});

let root = [];
data.forEach(el => {
    // 判断根节点
   /* if (el.parentId === null) {
        root.push(el);
        return;
    }*/
     if (Object.keys(idMapping).indexOf(el.parentId.toString(), 0) === -1){
         root.push(el);
         return;
     }
    // 用映射表找到父元素
    let parentEl = data[idMapping[el.parentId]];
    // 把当前元素添加到父元素的`children`数组中
    parentEl.children = [...(parentEl.children || []), el];
});

console.log(root);



