import React,{Component} from 'react';



const Service=(props)=>
{

  const finalresult=({result})=>
  {

    if(result)
    {

      return result.map( (res,index)=>{
        return( <ul key={index} >
                  <li>{res.id}</li>
                  <li>{res.name}</li>
                </ul>)
      })

    }

  }

  return (<>

    {  finalresult(props)   }
       
  </>)

}


export default Service;