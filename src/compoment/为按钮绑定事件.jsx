import React from "react"

//可以直接这样引入
import "bootstrap/dist/css/bootstrap.css"

//定义一个列表组件类
export default class CommentList extends React.Component{
    constructor(){
        super();
        this.state = {
            msg : "aaa"
        }
    }

    render(){
        return <div>
            {/* 这里使用的是匿名函数
            <button className="btn btn-primary" onClick={function(){console.log("登陆")}}>登陆</button> */}
            {/* 
             这种使用的是函数的引用
            <button className="btn btn-primary" onClick={this.login}>登陆</button> */}

            {/* 这种采用的类似java中的lambda */}
            <button className="btn btn-primary" onClick={()=> this.login()}>登陆</button>
            </div>
    }

    login(){
        console.log("登陆")
    }
}