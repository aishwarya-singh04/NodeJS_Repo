//Practical-7 Lecture

/*import './App.css';   //adding External CSS



const name="Beta-Labs";
const i = true;
const logo="https://2.bp.blogspot.com/-CzH30hf-cXg/X9sdRn_6eMI/AAAAAAAACJU/aFcU5FprQMgOnZ6Bz_yzyV8aB_Gm8y7dgCK4BGAYYCw/s1600/Blog%2BBanner%2B1080x210.jpg"
const link="https://www.beta-labs.in";
const element = (
  <ol>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
    <li>MongoDB</li>
    <li>ReactJS</li>
  </ol>
);

//adding inline CSS

const cssStyle = {
  color: "red",
  backgroundColor: "yellow",
  display: "inlineBlock",
  padding: "10px",
  borderRadius: "10px"
};
function App() {
  return (

    <div className ="App">
      <h1>Hi i am from <span style={cssStyle}> {name}</span></h1> 
      <h2>I am a follower: {i==1 ? 'Yes':'No'}</h2>
      <a href={link}><img src={logo} alt=""/>
      </a>
      <h3>The topics you'll learn here:</h3>
      {element}
      
    </div>
      
  );
}
export default App;*/

/*-----------------------------------------------------PRACTICAL-7---------------------------------------------------------------*/

/*import ClassComponent from './Practical-7Components/ClassComponent';
import FunctionalComponent from './Practical-7Components/FunctionalComponent';
import  './App.css'; 
import 'ReactFragment.js';

const classCss={
  backgroundColor:"lightBlue",
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "20px",
  
};
const funcCss={
  backgroundColor:"pink",
  borderRadius: "10px",
  padding: "20px",
  
};
function App() {
  return (
    
    <div className ="App">
      <div style={classCss}>
        <ClassComponent/>
      </div>
      <div style={funcCss}>
        <FunctionalComponent/>
      </div>
    </div>
  );
}
export default App;*/


//----------------------------------------------------Using React Fragment----------------------------------------------
/*import ReactFragment from './ReactFragment'
function App() {
  return (
    
    <div className ="App">
      <ReactFragment/>
    </div>
  );
}
export default App;*/


//--------------------------------------------REACT COMPONENTS---------------------------------------------------------
/*import './App.css';
function App() {
  return (
    
    <div className ="App">
      <h1>Welcome to my blog!</h1>
    </div>
  );
}
export default App;*/



/*--------------------------------------------REACT STATE-------------------------------------------------------------*/

/*import ReactState from "./Components/ReactState";
import './App.css';
function App() {
  return (
    
    <div className ="App">
      <ReactState/>
    </div>
  );
}
export default App;*/


/*---------------------------------------------------Component Life cycle: ---------------------------------------------

1. Create(Mounting)
i)componentWillMount()
ii)render()
iii)componentDidMount()
 
2. Updation: upadted with the help of state or hooks(functions are called in the background)

3. Unmounting
*/


/*import ReactState from "./Components/ReactState";
import './App.css';
import LifeCycleHooks from "./Components/LifeCycleHooks";
function App() {
  return (
    
    <div className ="App">
      <LifeCycleHooks/>
    </div>
  );
}
export default App;*/

/*------------------------------------------Using React Props---------------------------------------------------------*/

//props allows user to pass data; 
//it makes components dynamic; 
//props in a component are read-only and can't be changed;

/*import './App.css';
import MyComponent1 from "./Components/MyComponent1";
import MyComponent2 from "./Components/MyComponent2";
function App() {
  return (
    
    <div className ="App">
      <MyComponent1 title="Declarative" content="lthfnmnfskjcjkc ddddddddddddd
                    dddddddddddddddd
                    cbkjbvm 
                    vbjjjjjjjjjjjjjjjjjjjjjjj
                    jjjjjjjjjjjjj
                    bjfvbffffffffffffffffffff
                    fffffffffffff
                    ffffffffffffffffffffffffff
                    ffffdv
                    jfhuhufbvdjvgyugknygjn
                    cjkcgbnmcndk
                    jchdygsjcbucndcgdcyhkb
                    ygcbjcbcygebc" author="Aishwarya"/>
      <MyComponent1 title="Component-Based" content="lthfnmnfskjcjkc ddddddddddddd
                    dddddddddddddddd
                    cbkjbvm 
                    vbjjjjjjjjjjjjjjjjjjjjjjj
                    jjjjjjjjjjjjj
                    bjfvbffffffffffffffffffff
                    fffffffffffff
                    ffffffffffffffffffffffffff
                    ffffdv
                    jfhuhufbvdjvgyugknygjn
                    cjkcgbnmcndk
                    jchdygsjcbucndcgdcyhkb
                    ygcbjcbcygebc"/>
      <MyComponent2 title="Learn Once- Write Anywhere" content="lthfnmnfskjcjkc ddddddddddddd
                    dddddddddddddddd
                    cbkjbvm 
                    vbjjjjjjjjjjjjjjjjjjjjjjj
                    jjjjjjjjjjjjj
                    bjfvbffffffffffffffffffff
                    fffffffffffff
                    ffffffffffffffffffffffffff
                    ffffdv
                    jfhuhufbvdjvgyugknygjn
                    cjkcgbnmcndk
                    jchdygsjcbucndcgdcyhkb"/>
      
    </div>
  );
}
export default App;*/

/*----------------------------------------------------------------PRACTICAL-8-------------------------------------------------------------------*/ 
// import ReactState from "./Practical-8/ReactState";
// import './App.css';
// function App() {
//   return (
    
//     <div className ="App">
//       <ReactState count={0}/>
//     </div>
//   );
// }
// export default App;



//import './App.css';
//import LifeCycleHooks from "./Practical-8/LifeCycleHooks";
//import Test from './Components/Test';
//function App() {
//  return (
//    
//    <div className ="App">
//      <LifeCycleHooks/>
//      {/*<Test/>*/}
//    </div>
//  );
//}
//export default App;


// import ReactHooks from "./Components/ReactHooks";
// import './App.css';
// function App() {
//   return (
    
//     <div className ="App">
//       <ReactHooks/>
//       {/*<Test/>*/}
//     </div>
//   );
// }
// export default App;


//React Hooks
// import ReactEvents from "./Components/ReactEvents";
// import './App.css';
// import StateObject from "./Components/StateObject";
// function App() {
//   return (
    
//     <div className ="App">
//       <ReactEvents/>
//       <StateObject/>
//     </div>
//   );
// }
// export default App;



//Practical -9
// import React, { useState } from "react";

// import './App.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

// export default function App() {
// const [val,setVal]= React.useState({
//   id:"",
//   username:"",
//   password:"",
//   email:""
// });
//   const [user, addUser] = useState([
//     {
//       id: 1,
//       username: "harry",
//       password: "hermoine123",
//       email :"harryherione@gmail.com"
//     },
    
//   ]);

// const change=(e)=>{
//   const val = e.target.value;
//   const name = e.target.name;
//   console.log(name)
//   setVal((prev)=>{
//     if(name==="username"){
//       return{
//         username :val,
//         password:prev.password,
//         email:prev.email

//       }
//     }
//     else if(name==="password"){
//       return{
//         username :prev.username,
//         password:val,
//         email:prev.email

//       }
//     }
//     else{
//       return{
//         username :prev.username,
//         password:prev.password,
//         email:val

//       }
//     }
//   })
// }

// const submit =()=>{
//   addUser((old)=>{
//     return [...old,val]
//   })
// }
// console.log(user)

//   const renderUser = (user, index) => {
//     return (

//       <tr key={index}>

//         <td>{index+1}</td>

//         <td>{user.username}</td>

//         <td>{user.password}</td>
//         <td>{user.email}</td>

//       </tr>
//     );
//   };
//   return (

//     <div className="container mt-3">
// <h1 style={{textAlign:"center",marginBottom:"20px"}}>React Dyanmic Table</h1>
// <div >
// <label name="username" for="user">UserName</label>
// <input type="text" value={val.username} name="username" onChange={change}></input>
// <label name="username" for="user" >Password</label>
// <input type="text" value={val.password}name="password" onChange={change}></input>
// <label name="username" for="user">Emailid</label>
// <input type="text" value={val.email} onChange={change} name="email"></input>
// <button type="submit" onClick={submit}>Adduser</button>
// </div>
//       <table class="table">

//         <thead class="thead-light">

//           <tr>

//             <th>#</th>

//             <th>User name</th>

//             <th>Password</th>
// <th>Email</th>
//           </tr>

//         </thead>
//         {console.log("jcjxsz")}
// {console.log(user)}
//         <tbody>{user.map(renderUser)}</tbody>

//       </table>

//     </div>
//   );
// }



//    REACT ROUTER //


import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <Router>
    <div className ="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;



//PRACTICAL -9

// import React from 'react';
// import './App.css';
// import DisplayData from "./Practical-9/DisplayData";
// function App() {
//   return (
    
//     <div className ="App">
//       <DisplayData/>
//     </div>
//   );
// }
// export default App;

