import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Table, Button} from 'react-bootstrap';
export default function DisplayData() {
    /*const arr=[2,5,10,14,1];
    const newarr = arr.map(function(num){
        return <li>
            {num*2}
        </li>;
    });*/
    const arr=[
        {
            username: "pankkap", 
            password: "pankaj123",
            email: "pankaja@gmail.com",
        },
        {
            username: "aishwarya", 
            password: "aishwarya123",
            email: "aishwarya@gmail.com",
        },
        {
            username: "rohit", 
            password: "rohit123",
            email: "rohit@mail.com",
        },
        {
            username: "shubh", 
            password: "shubh123",
            email: "shubh@gmail.com",
        },
        {
            username: "shruti", 
            password: "shruti123",
            email: "shruti@gmail.com",
        },
    ];

    const showData=(num, index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{num.username}</td>
                <td>{num.password}</td>
                <td>{num.email}</td>
            </tr>
        );
    }
    return (

        <div className="container">
            {/* <ul> 
                {newarr}
            </ul>*/}

            {/*Creating a Arrow function */}

            {/* <ul>
                {
                    arr.map((num)=>{
                        return <li>{num*2}</li>
                    })
                }
            </ul> */}

            <Table striped bordered hover>
            <thead className="table-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Usename</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {arr.map(showData)}
            </tbody>
            </Table>

            <Button variant="primary">React Bootstrap Button</Button>
            <br/>
            <br/>
            <button className="btn btn-primary">Normal Bootstrap Button</button>
        </div>
    );
}
