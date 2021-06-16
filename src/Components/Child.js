import React, { Component } from 'react'

export default class Child extends Component{
    constructor(props)
    {
        super(props);
    }

    componentWillReceiveProps(props)
    {
        console.log("componentWillReceiveProps called");
    }
    render() {
        console.log("render is called in Child");
        return (
            <div>
                <h1>{this.props.data}</h1>
            </div>
        );
    }
}
