// console.log("hello")

import React from "react" // 表示引入react包中的React
import ReactDOM from "react-dom"

//通过React创建虚拟DOM
/**
 * 参数1 : 创建DOM元素的类型,html标签名,字符串,默认为input
 * 参数2 : DOM元素的属性，可以是对象或者null,对象中使用key-value表示属性的名称和值
 * 参数3 : 子元素
 * 参数n : 子元素
 */
// const myH1 = React.createElement("h1",{'id':'myh1','titile':'this is a h1'},"这是一个h1");

// const myDiv = React.createElement("div",null,myH1);//这个表示创建一个<div>标签,这个标签没有属性,子节点为上面的myH1虚拟DOM

const myDiv = <div><h1 id="myh1" title="this is a h1">这是一个h1</h1></div>

//定义一个js常量
let a = 11;

//使用{}引用js变量,在{}中还可以进行计算
const myDiv2 = <div>{a+10}</div>

//定义一个js数组
let attr = [10,11];

let attr1 = [];

//使用数组遍历
attr.forEach(at=>{
    attr1.push(<div key={at}>{at}</div>);//push 添加元素,直接使用jsx,使用{}引用js变量
})

//直接使用数组中的map
const bb = attr.map(at=>{
    return <div key={at}>{at}</div>//这里被map包裹的标签,需要添加key
})

// 定义组件
function Hello(props){//使用隐式的参数props,这里是形参,可以任意名称,可以借助chrome react插件查看props参数
    // return null;//创建的组件必须要有返回值,要么为null，要么为DOM节点

    //这里通过
    return <div>{props.name}--{props.age}</div>
}

const person = {
    age:10,
    job:'sdf'
}

//在jsx中使用上面定义的组件 
//这里给组件添加属性,默认会通过props这个对象进行传递到组件的方法中
const cc = <div><Hello name="sss" age={person.age} job={person.job}></Hello></div>

//通过ReactDOM将创建的虚拟DOM渲染到页面上
/**
 * 参数1 : 要渲染的虚拟DOM
 * 参数2 : 目标页面上的容器DOM, 比如在index.html页面中添加一个<div id="my"></div>标签作为容器
 */
// ReactDOM.render(bb,document.getElementById("my"));

ReactDOM.render(cc,document.getElementById("my"));



