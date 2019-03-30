import React from "react"

//将行内样式抽离
const style = {
    itemNameStyle:{
        color:"red",fontSize:"20px"
    },
    itemContentStyle:{color:"blue"}
}

export default class CommentItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>
            <div style={style.itemNameStyle}>评论人:{this.props.commentListData.name}</div>
            <div style={style.itemContentStyle}>评论内容:{this.props.commentListData.content}</div>
        </div>
    }
}