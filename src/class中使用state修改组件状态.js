import React from "react"
import ReactDOM from "react-dom"

//定义一个class,并继承React.Component
class Person extends React.Component {

    //定义一个构造方法
    constructor(){
        super();//最好调用下父类的构造方法
        //定义一个state
        this.state = {
            msg : "aaaaa"
        }
    }

    //重写render函数,在调用ReactDOM.render方法时,会自动调用这个render方法
    render(){
        //修改state属性中的值
        this.state.msg = "haha";

        //使用state属性
        return <div>{this.state.msg}</div>
    }
}

//使用自定义的类创建组件标签
const myPerson = <Person></Person>

//将自定义的组件渲染到页面
ReactDOM.render(myPerson,document.getElementById("my"));