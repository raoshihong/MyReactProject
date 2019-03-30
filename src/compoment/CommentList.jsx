import React from "react"
//引入CommentItem组件
import CommentItem from "@/compoment/CommentItem"

//引入自定义的样式表
// import CommentListCss from "@/css/CommentList.css"

//定义一个列表组件类
export default class CommentList extends React.Component{
    constructor(){
        super();
        this.state = {
            //定义数据
            commentList : [
                {id:1,name:"张三",content:"哈哈"},
                {id:2,name:"里斯",content:"方法"},
                {id:3,name:"王五",content:"单独"},
                {id:4,name:"赵六",content:"嗯嗯"}
            ]
        }
    }

    render(){
        return <div>
            <div className="title">评论列表</div>
            {this.state.commentList.map(item=><CommentItem commentListData={item} key={item.id}></CommentItem>)}
            </div>
    }
}