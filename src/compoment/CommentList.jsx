import React from "react"

//可以直接这样引入
import "bootstrap/dist/css/bootstrap.css"

//引入http请求框架(也可以直接引入jquey)
import axios from "axios/dist/axios"

//定义一个列表组件类
export default class CommentList extends React.Component{
    constructor(){
        super();
        this.state = {
            data : {
                username:"",
                password:""
            }
        }
    }

    render(){
        return <div>
            用户名:<input type="text" value={this.state.data.username} onChange={()=>this.userInfoChange()} ref="username"></input><br/>
            密码:<input type="password" value={this.state.data.password} onChange={()=>this.userInfoChange()} ref="password" ></input><br/>
            <button className="btn btn-primary" onClick={()=>this.login()}>登陆</button>
            </div>
    }
    
    userInfoChange(){
        this.setState({
            data :{
                username : this.refs.username.value,
                password:this.refs.password.value
            }
        })
    }

    login(){
        console.log(this.state.data)
        
        axios.post("http://localhost:8080//react/api/login",this.state.data)
        .then(response=>console.log(response.data))
        .catch(function (error) {
            console.log(error);
          });
    }

}