import React, { Children, Component } from 'react'
import Child from './Child';


export default class LifeCycleHooks extends Component {
    constructor(){
        super();
        this.state={
            data:"",
        }
        console.log("Constructor called");
    }

    componentDidMount(){
        console.log("ComponentDidMount called");
        alert("Component Mounted");
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate called");
        alert("Component Updated");
    }
    render() {
        console.log("Render called");
        return (
            
            <div>
                
                <h1>Life Cycle Called</h1>
                <button onClick={()=>this.setState({data:"Updated"})}>Update Me</button>

                <Child data={this.state.data}/>
               
            </div>
        )
    }
}
/*import React, { Component } from 'react'
import Child from './Child';

export default class LifeCycleHooks extends Component {
    constructor(){
        super();
        this.state={
            data:"",
        }
        //this.Update = this.Update.bind(this)
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to the BetaLabs..!!</h1>
                <h4>Click on the button to see More | Less</h4>
                <Child data={this.state.data}/>
                <button onClick={()=>this.setState({data:"This is Pankaj Kapoor, Your trainer for Web Development. With the help of this blog, I will provide you all the code related to the topic I discuss in the lecture. With this, I am also trying to provide the content required to go through the theory concept of the topics. Soon I will also provide you the video lecture that will help you to understand the topic very well."})}>Read more</button>
            
                
            </div>
        );
    }
}*/


/*import React,{useState} from 'react';


function App() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
      This is Pankaj Kapoor, Your trainer for Web Development. With the help of this blog, I will provide you all the code related to the topic I discuss in the lecture. With this, I am also trying to provide the content required to go through the theory concept of the topics. Soon I will also provide you the video lecture that will help you to understand the topic very well.
      </p>
  </div>
  const linkName=readMore?'Read Less':'Read More'
  return (
    <div className="App">
        <h1>Welcome to the BetaLabs..!!</h1>
        <h4>Click on the button to see More | Less</h4>
        {readMore && extraContent}
      <button className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h5>{linkName}</h5></button>
      
    </div>
  );
}

export default App;*/
