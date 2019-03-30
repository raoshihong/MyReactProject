import React from "react"
import ReactDOM from "react-dom"

//引入封装的自定义组件
import Person from "@/compoment/Person"

//使用自定义的类创建组件标签
const myPerson = <Person></Person>

//将自定义的组件渲染到页面
ReactDOM.render(myPerson,document.getElementById("my"));