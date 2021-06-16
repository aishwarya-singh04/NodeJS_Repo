import React, { useState } from 'react'

export default function StateObject() {
    const [name, setName] = useState({firstname:"", lastname:""});
    return (
        <div>
            <input type="text" value={name.firstname} onChange={(e)=> setName({...name, firstname: e.target.value})}/>
            <input type="text" value={name.lastname} onChange={(e)=> setName({...name, lastname: e.target.value})}/>

            <h1>Firstname:{name.firstname}</h1>
            <h1>Lastname:{name.lastname}</h1>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    );
}
