import React, { Component } from 'react'

export default class User extends Component {
    componentWillUnmount(){
        alert("User Deleted");
        console.log("componentWillUnmount is called");
    }
    render() {
       
        return (
            <div>
                <ul>
                    <li>Name: Aishwarya</li>
                    <li>Address: Varanasi</li>
                    <li>Mobile: 7393090868</li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
