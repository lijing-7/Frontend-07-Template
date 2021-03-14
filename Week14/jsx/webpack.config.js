module.exports = {
    entry: './main.js',
    //配置babel
    module: {
        rules: [
            {
                test:/\.js$/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets:['@babel/preset-env'] ,//preset-env:eg:可以将for of 循环编译成 普通的循环,
                        plugins:[['@babel/plugin-transform-react-jsx',{pragma:'createElem'}]],  //transform 可以在js文件里识别html标签  eg:<div/> 识别小于号为尖括号
                    }
                }

            }
        ]
    },
    mode: "development",//发布时改为：‘production’
}
