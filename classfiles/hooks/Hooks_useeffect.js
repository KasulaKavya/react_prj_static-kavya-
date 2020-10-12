import React, { useState , useEffect } from 'react';
import axios from 'axios';

const url='https://jsonplaceholder.typicode.com/users';

const UseEffecthooks=()=>{

    //Javascript string data
    const [user,setUser]=useState([]);

//HTTP_RESTAPI_CALLS
useEffect(()=>
{ 
    axios.get(url).then( (res)=> setUser(res.data) );
},[]);


    return (<>
        <div className="container p-5">
            
                <h3 className="py-3 text-center">UseEffect Hooks Example </h3>

        

               <table className="table table-bordered table-dark w-100 mx-auto ">
                   <tbody>
                        { 
                            user.map( (res,index)=> {
                                    return(<tr key={index}>
                                            <td>{ res.id } </td>
                                            <td>{ res.name } </td>
                                            <td>{ res.username } </td>
                                            <td>{ res.email } </td>
                                            <td><button className="btn btn-primary">View</button></td>
                                            <td><button className="btn btn-info">Edit</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                        </tr>)
                            })
                        } 
                   </tbody>
               </table>

               
            
        </div>
    </>)
}


export default UseEffecthooks;