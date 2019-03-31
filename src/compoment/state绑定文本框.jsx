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
            {/* 在react中如果文本框的value绑定了数据,那么默认时readonly的,除非指定onChange事件的绑定 */}
            {/* e表示事件对象 */}
                <input type="text" value={this.state.data.name} onChange={(e)=>this.txtChange(e)} ref="txt"></input>
                <h1>{this.state.data.name}</h1>
            </div>
    }

    txtChange(e){
        //将改变的数据通过setState回写到state中
        // console.log(e.target.value)
        // this.setState({
        //     data : {
        //         name : e.target.value
        //     }
        // })

        //在React中还可以通过refs来获取文本框目标的value
        console.log(this.refs.txt.value)
        this.setState({
            data:{
                name : this.refs.txt.value
            }
        })
    }
}