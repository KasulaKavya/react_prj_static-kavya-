import React from 'react'
import User from './user.json'



export default()=>
{
    return (
        <>

            <h1> Services Component</h1>

            <table className="table table-bordered w-75 mx-auto table-dark">
                <tbody>

                    {
                        User.map((data,i)=>
                            {
                                return (
                                    <tr key={i}>
                                        <td> { data.id } </td>
                                        <td> { data.name } </td>
                                        <td> { data.email } </td>
                                    </tr>
                                )
                            }
                        )
                    } 

                </tbody>
            </table>

        </>
    )
    
}


