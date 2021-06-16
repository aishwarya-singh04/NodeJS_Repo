import React, { Component } from 'react'
import User from './User';

export default class Test extends Component {
    constructor(){
        super();
        this.state={
            toggle: true
        };
    }
    render() {
        return (
            <div>
                <h1>React Component will unmount</h1>
                {this.state.toggle ? <User/>: null}
                <button onClick={()=>{
                    this.setState({toggle: !this.state.toggle});
                }}>Delete</button>
                
            </div>
        );
    }
}
