import React from 'react'


const Child=(props)=>{

    return( 
        <>

            <div className="container border ">


                <h1> Child Component </h1>

                <h4> {props.name} </h4>
                <br/>

                {props.p1features} 


            </div>

        </>

    )
}

export default Child;