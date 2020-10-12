import React from 'react';

//import External json data with objectname into Components
import User from './user.json'



var v="About Component";

export default()=>
{

    return (
        <>

            <h1> { v }</h1>
            
            {
                User.map( ( data,i) =>
                    {
                        return ( 
                            <ul key={i} className="color-pink">
                                <li> { data.id } </li>
                                <li> { data.name } </li>
                                <li> { data.email } </li>
                            </ul>
                        ) //return close
                    } 
                ) // map close 
            } 

        </>
    )

}






