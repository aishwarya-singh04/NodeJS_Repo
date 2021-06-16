import React, { Component } from 'react'

export default class MyComponent2 extends Component {
    //to use Props in class Component , we use constructor
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="Box">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
