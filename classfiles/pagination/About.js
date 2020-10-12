import React from 'react';
import Pagination from './Pagination.js'

//import External json data with objectname into Components
import User from './user.json'



export default()=>
{

    return (
        <>

            <div className="container">
                <h3 className="text-center py-2 my-2 " >About Component </h3>
            </div>

            <Pagination />
            
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






