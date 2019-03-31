import React from "react"

//可以直接这样引入
import "bootstrap/dist/css/bootstrap.css"

//定义一个列表组件类
export default class CommentList extends React.Component{
    constructor(){
        super();
        this.state = {
            msg : "aaa",
            data : {
                name : "lisi"
            }
        }
    }

    render(){
        return <div>
            <button className="btn btn-primary" onClick={()=> this.login()}>登陆</button>

            <h1>{this.state.msg}</h1>
            <h2>{this.state.data.name}</h2>
            </div>
    }

    login(){
        //修改
        // this.state.msg = "bbb" //这种写法,在修改state后，不会自动刷新页面数据
        this.setState({msg:"fff",data:{name:"zzz"}}) //这种写法能够自动刷新界面
    }
}