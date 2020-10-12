import React from 'react'


const Child=(props)=>{

    let {name}=props

    return( 
        <>

            <div className="container border ">


                <h1> Child Component </h1>

                {/* calling through props */}
                <h4> {name} </h4>
                <br/>

                {props.p1features} 


            </div>

        </>

    )
}

export default Child;