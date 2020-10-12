import React from 'react'
import Child from './Child.js'

var pname="REDMI 8";
var p1features= ["4 GB RAM | 64 GB RAM ",
                "16.56 cm (6.52 in inch) HD + Display ",
                "12MP+8MP+2MP+2MP | 8MP Front Camera 5000mAh Battery ",
                "PRICE : &#8377; 10,999 " ]
;


var finaldata=p1features.map((data,i)=> 
{
    return ( 
        <ul key={i}>
            <li>{ data }</li>
        </ul>
    )
} ) 


const Parent=()=>{


    return (
        <>

            <div className="container border "> 

                <h1> Parent Component </h1>

                { <h4> { pname } </h4> } 

                { finaldata }

                <Child  name={ pname }  p1features={ finaldata } />
            
            </div>
            

        </>
    )

}

export default Parent;

{/* pfeatures:` 
          <ul>
               <li> 4 GB RAM | 64 GB RAM </li>
               <li> 16.56 cm (6.52 in inch) HD + Display </li>
               <li> 12MP+8MP+2MP+2MP | 8MP Front Camera 5000mAh Battery </li>
               <li> PRICE : &#8377; 10,999 </li>
          </ul>
        ` */}

        