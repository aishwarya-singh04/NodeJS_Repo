import React, { Component } from 'react'

export default function MyComponent1(props) {
        return (
            <div className="Box">      
                {/*<h1>Declarative Component</h1>
                <p>
                    lthfnmnfskjcjkc ddddddddddddd
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
                    ygcbjcbcygebc
                </p>*/}
                {/*Remove the static content*/}    
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <p>{props.author}</p>

            </div>
        )
   
}
