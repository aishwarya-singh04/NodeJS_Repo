
// import React from 'react'

// export default function ReactEvents() {
//     const myFun=()=>{
//         console.log("Button Clicked!!!!");
//     }
//     return (
//         <div>
//             {/*<button onClick={console.log("Button Clicked!")}>Click</button> */}{/* Function will be automatically called as the function binding is not done yet*/}
//             {/*<button onClick={()=>{console.log("Button Clicked!")}}>Click</button>*/}   {/*Arrow Operator comes to rescue!*/}

//             <button onClick={myFun}>Click Me</button>
//         </div>
//     );
// }



import React, { useState } from 'react'

export default function ReactEvents() {
    const [data, setData]= useState("");
    const myFun = (e) =>{
        // console.log(e.target.value); We want to prnt data onto the screen
        setData(e.target.value);
    }
    const uploadData=()=>{
        // e.preventDefault(e);    used to make onSubmit like a normal button
        alert(data);
    };
    return (
        <div>
            <form action=" " onSubmit={uploadData}>
            <input type="text" value={data} onChange={myFun}/>          {/*Value will display the data */}
            <h2>{data}</h2>
            <input type="submit" value="Upload Data"/>
            </form>
        </div>
    )
}

