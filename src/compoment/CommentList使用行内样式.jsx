import React from "react"
//引入CommentItem组件
import CommentItem from "@/compoment/CommentItem"

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
        //通过数组中的map将数据转换为标签并返回,使用state传递数据
         //在jsx中行内样式style是一个js对象,不再是以前html中的直接一个字符串了
         //对象中的属性值如果是字符串则需要双引号
        return <div>
            <div style={{color:"red",fontSize:"30px"}}>评论列表</div>
            {this.state.commentList.map(item=><CommentItem commentListData={item} key={item.id}></CommentItem>)}
            </div>
    }
}