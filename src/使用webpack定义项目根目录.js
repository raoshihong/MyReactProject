import React from "react"
import ReactDOM from "react-dom"

// import HelloWorld from "./compoment/Hello.jsx" //引入自己封装的库类,如果在webpack.config.js中没有配置的话,这里默认需要写文件后缀.jsx

import HelloWorld from "@/compoment/Hello" //如果在webpack.config.js中配置了resolve 资源后缀,则这里可以省略

const dd = <HelloWorld name="lisi">sssss</HelloWorld>  //引用自定义的组件

//进行渲染
const contain = document.getElementById("my");
ReactDOM.render(dd,contain);