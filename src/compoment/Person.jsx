import React from "react"

//在nodejs中 export default就相当于java中的public
export default class Person extends React.Component {
    constructor(){
        super();
        this.state = {
            msg : "adfasdf",
            code: "111"
        }
    }

    render(){
        return <div>{this.state.msg}--{this.state.code}</div>;
    }
}