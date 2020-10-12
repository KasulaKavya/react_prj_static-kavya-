import React from 'react'


const Child=({ id,name,email,phno })=>{


    return( 
        <>

            <div className="container border p-5 ">


                <h1> Child Component </h1>

                <p> {id} </p>
                <p> {name} </p>
                <p> {email} </p>
                <p> {phno} </p>


            </div>

        </>

    )
}

export default Child;