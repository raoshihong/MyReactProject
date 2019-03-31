import React from "react"

export default class CommentItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>
            <div className="title">评论人:{this.props.commentListData.name}</div>
            <div className="content">评论内容:{this.props.commentListData.content}</div>
        </div>
    }
}