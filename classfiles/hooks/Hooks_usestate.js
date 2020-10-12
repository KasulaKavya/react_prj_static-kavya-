import React, { useState  } from 'react';
import postdata from './posts.json';




const Usestatehooks=()=>{

    //Javascript string data
    const [user,setUser]=useState([]);

    const result= user.map( (res,index)=> {
        return(<ul key={index}>
                <li>{ res.id } </li>
                <li>{ res.name } </li>
                <li>{ res.email } </li>
            </ul>)
})

    const HandleState=()=>
    {
        setUser(postdata);
    }

    return (<>
        <div className="container p-5">
            <h3>Usestate Hooks</h3>
                <p> USER DATA is: </p>

                { result } 

                <button onClick={ HandleState }>Click</button>
            
        </div>
    </>)
}


export default Usestatehooks;