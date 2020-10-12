import React from 'react'
import User from './user.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd, faAmbulance } from '@fortawesome/free-solid-svg-icons'




export default()=>
{
    return (
        <>

            <h1> Contact Component <FontAwesomeIcon   icon={ faAd } style={ { 'color':'red','textAlign':'center'  } } /> </h1>


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

            <FontAwesomeIcon   icon={ faAmbulance } />


        </>
    )
    
}
