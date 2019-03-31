import React from "react"
//引入CommentItem组件
import CommentItem from "@/compoment/CommentItem"

//引入自定义的样式表
import CommentListCss from "@/css/CommentList.scss"


//全局化的样式表对象为空对象,模块化的样式表对象有值
console.log(CommentListCss)

// import bootstrapCss from "bootstrap/dist/css/bootstrap.css"

// console.log(bootstrapCss)
//可以直接这样引入
import "bootstrap/dist/css/bootstrap.css"

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
        //这里使用上面引入的样式对象CommentListCss,多个class名称，则用数组的形式
        return <div>
            {/* <button className={[bootstrapCss.btn,bootstrapCss["btn-primary"]].join(" ")}>登陆</button> */}
            <button className="btn btn-primary" onClick={function(){console.log("登陆")}}>登陆</button>
            <div className={CommentListCss.title}>评论列表</div>
            {this.state.commentList.map(item=><CommentItem commentListData={item} key={item.id}></CommentItem>)}
            </div>
    }
}