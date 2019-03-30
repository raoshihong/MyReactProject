import React from "react"
import ReactDOM from "react-dom"

//创建一个class,并实现React中的Component类
class Person extends React.Component{
    
    //实现render渲染方法
    render(){
        //这个render方法必须有返回,可以为null,也可以为jsx代码
        //在class中使用props属性获取组件中定义的属性变量,这里必须使用this.props
        return <div>asfsadf,{this.props.name}</div>
    }
}

//使用Person类创建jsx标签,在是哦那个ReactDOM.render时会自动调用类中的render方法的
//在class创建的组件中定义属性name
const cc = <div>sdfsdf<Person name="zhangsan"></Person></div>

//调用ReactDOM中的render方法进行渲染指定的dom到指定的容器上
ReactDOM.render(cc,document.getElementById("my"));