import React,{ useState } from 'react'
import userdetails from './user.json'


//usestate initialisation
const Usestate=()=>
{

    //state intiatilisaton
    const [name,setName]=useState('kavya');
    const [languages]=useState(['English','Telugu','Hindi']);


    // state changes
    const [user,setUser]=useState('kavyasri')


    // json data
    const [userdata,setUserdata]=useState([])

    const result=userdata.map((data,index)=> {
        return(<ul key={index}>
            <li>{data.id}</li>
            <li>{data.name}</li>
            <li>{data.email}</li>
            <li>{data.location}</li>
            <li>{data.phone}</li>
        </ul>)
    })


    // state changes from function
    const Change=()=>
    {
        setName(`hello ${name}`);
    }


    // state restapi data function
    const ChangeRestapi=()=>
    {
        setUserdata(userdetails);
    }



    return(<>

        <div className="container p-5">

            <h3>Usestate Hooks</h3>
            <p> State is : {name} </p>
            <button onClick={ Change }>click</button>
            <br/> <br/>
            <p> State is : 
                {
                    languages.map( (res,index)=> <li key={index}>{index+1} - { res } </li>)
                }
            </p>

            <hr/>

            {/* uestate changes statements */}
            <h3>Usestate Changes Hooks</h3>
            <p> {user} </p>
            <button onClick={ ()=> setUser("kasula kavya") }>Click</button>

            <br/><br/><hr/>

            {/* uestate json statements */}
            <h3>Usestate Changes Hooks</h3>
            <p>  user data is : {result} </p>
            <button onClick={ ChangeRestapi }>Click</button>
            
        </div>

    </>)
 

}




export default Usestate;