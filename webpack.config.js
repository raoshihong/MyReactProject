//const表示定义变量
const path = require('path')//表示引入path包中的path类
const HtmlWebpackPlugin = require('html-webpack-plugin') //表示引入html-webpack-plugin中的HtmlWebpackPlugin类

//通过new创建实例,构造方法有两个可选的参数
// template表示指定哪个文件要输出到内存中
// filename 表示输出到内存中的文件名
const htmlPlugin = new HtmlWebpackPlugin({
    template : path.join(__dirname,'./src/index.html'), //path 就是上面引入的path类,join是一个拼接字符串的方法,__dirname表示当前文件的目录
    filename : 'index.html'
}); 

//这个文件时webpack执行命令时的配置文件
module.exports = {//这里表示暴露一个打包的配置对象  因为webpack基于node构建的,所以这里支持node api语法
    mode : 'development', //production
    //当执行webpack命令时,会找到这个配置文件,并读取这里的配置对象
    //可以指定 entry入口配置,但是到了webpack 4后使用预定大于配置,默认就是src/index.js作为入口
    // entry : 'index.js'
    plugins :[ //在这里指定上面创建的插件实例
        htmlPlugin
    ],
    module :{//所有的第三方配置规则,都在这里配置
        rules: [//配置第三方匹配规则
            //这里表示在使用webpack编译项目时,如果遇到.js或者.jsx文件为后缀的,则使用babel-loader插件进行加载,exclude表示排除(一定要排除/node_modules,否则无法运行项目)
            {test : /\.js|.jsx$/,use:"babel-loader",exclude:/node_modules/ },
            //添加css的解析器,打包样式文件
            // {test : /\.css$/,use:["style-loader","css-loader"]}
        ]
    },
    resolve :{
        extensions:['.js','.jsx','.json'], //在这里配置了后,就会自动处理资源文件的后缀,在使用import from 导入时就可以省略后最
        alias:{//使用alias命别名
            "@":path.join(__dirname,"./src")  //这里使用了path,所以需要引入path的包
        }
    }
}