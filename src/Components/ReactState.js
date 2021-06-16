//import React, { Component } from 'react'
//
//export default class ReactState extends Component {
//    constructor(){
//        super();              //for inheritence ... first of all constructor of parent will be called
//        this.state={
//            roll:1,
//            name:"aishwarya",
//
//        };
//    }
//    UpdateMe = ()=> {   //event binding using arrow function
//        this.setState({
//            roll: roll+1,
//            name: "pooja",
//        });
//    }
//    render() {
//        return (
//            <div>
//                <h1>{this.state.roll}</h1>
//                <h1>{this.state.name}</h1>
//                {/*Event generation*/}
//                <button onClick={this.UpdateMe}>Click Me</button>
//                {/*UpdatemE is function, render method is called everytime we click button */}
//            </div>
//        )
//    }
//}//


//Data will be sent using props
//import React, { Component } from 'react'
//
//export default class ReactState extends Component {
//    constructor(props)
//    {
//        super(props);
//        this.state={
//            roll: this.props.roll,
//            name: this.props.name,
//        };
//    }
//
//    UpdateMe = ()=> {   //event binding using arrow function
//        this.setState({
//           roll: 10,
//           name: "Shiv",
//        });
//    }
//    render() {
//        return (
//            <div>
//                <h1>{this.state.roll}</h1>
//                <h1>{this.state.name}</h1>
//                {/*Event generation*/}
//                <button onClick={this.UpdateMe}>Click mE</button>
//                {/*UpdatemE is function, render method is called everytime we click button*/}
//            </div>
//        )
//    }
//}
//

//Data sent without using Arrow Function
//import React, { Component } from 'react'
//
//export default class ReactState extends Component {
//    constructor()
//    {
//        super();
//        this.state={
//            roll: 1,
//            name: "aishwarya",
//        };
//        this.UpdateMe= this.UpdateMe.bind(this);        //Event handler binding
//    }
//    UpdateMe = ()=> {   //event binding using arrow function
//        this.setState({
//           roll: 10,
//           name: "Shiv",
//        });
//    }
//    //Anonymous function
//    render() {
//        return (
//            <div>
//                 <h1>{this.state.roll}</h1>
//                <h1>{this.state.name}</h1>
//                {/*Event generation*/}
//                <button onClick={()=>this.setState({roll:2, name:"null"})}>Click mE</button>
//                {/*UpdatemE is function, render method is called everytime we click button*/}
//            </div>
//        )
//    }
//}

import React, { Component } from 'react'

export default class ReactState extends Component {
    constructor(props){
        super(props);
        this.state={
            count: this.props.count
        };

        this.increament = this.increament.bind(this)
        this.decreament = this.decreament.bind(this)
        this.reset = this.reset.bind(this)
    }
    increament(){
        this.setState({
            count: this.state.count + 1
          });
    };
    decreament(){
        this.setState({
            count: this.state.count - 1
          });
    };
    reset(){
        this.setState({
            count: this.state.count -this.state.count
          });
    };
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button type="button" class="btn btn-primary " onClick={this.increament}>Increase</button>
                <button type="button" class="btn btn-primary " onClick={this.reset}>Reset</button>
                <button type="button" class="btn btn-primary " onClick={this.decreament}>Decrease</button>
            </div>
        )
    }
}
