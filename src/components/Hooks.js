import React,{useState, useEffect} from 'react'
import axios from 'axios';


const url="https://jsonplaceholder.typicode.com/posts"


const Hooks=()=>
{

    const [userdata,setUserdata]=useState( [] );


    useEffect( ()=>{

        axios.get(url).then( (res)=> setUserdata( res.data ))

    },[])


    return (<>
        <div className="container p-5 bgimg ">

            <h3>Client Details</h3>

            {
                userdata.map((d,index)=>
                {
                    return(<> 
                        <ul key={index}>
                            <li>{d.id}</li>
                            <li>{d.title}</li>
                        </ul>
                    </>)
                }) 
            }

            <br />
            <br />

        </div>
    </>)


    
}

export default Hooks
