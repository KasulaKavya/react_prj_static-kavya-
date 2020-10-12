import React,{Component} from 'react'
import Child from './Child.js'




let userdata=
{
    id:101,
    name:'kumar',
    email:'kumar@gmail.com',
    phno:7896541230
}



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


class Parent extends Component
{


    render()
    {
        return (
            <>
                <div className="container border p-5 "> 
    
                    <h1> Parent Component </h1>
    
                    <p> { userdata.id } </p> 
                    <p> { userdata.name } </p>
                    <p> { userdata.email } </p>  
                    <p> {userdata.phno} </p>  
    
                    <br/>
    
    
                    { <h4> { pname } </h4> } 
    
                    { finaldata }
                    
    
                    <Child  name={ pname }  p1features={ finaldata }
                            id={userdata.id}
                            name={userdata.name} 
                            email={userdata.email}
                            phno={userdata.phno}
                    />
                
                </div>
            </>
        )
    }

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

        