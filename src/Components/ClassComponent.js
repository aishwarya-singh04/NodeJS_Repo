import React from 'react'

export class ClassComponent extends React.Component{
    render(){
        return (
            <h1>This is my Class Component</h1>
        )
    }
}

export class ClassComponent1 extends React.Component{
    render(){
        return (
            //Shorthand for <React.Fragment> to avoid extra div in case of rendering more than one root element
            <>                      
            <h1>This is my another Class Component</h1>
            <p>This is about Class Componenent</p>
            </>
        )
    }
}
//export default ClassComponent;