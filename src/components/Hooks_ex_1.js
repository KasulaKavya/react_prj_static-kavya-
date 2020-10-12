import React,{useState,useContext} from 'react'




const Context_data=React.createContext();

//const url="https://jsonplaceholder.typicode.com/posts"

const Hooks=()=>
{

    const [empdata]=useState({ id:101, name:'kavya', location:'Hyderabad', salary:97452 });

    return (<>
        <div className="container p-5">

            <h3>Employee</h3>

            <li>{empdata.id}</li>
            <li>{empdata.name}</li> 
            <li>{empdata.location}</li> 
            <li>{empdata.salary}</li> 

            <br />
            <br />

            <Context_data.Provider value={empdata}>

                <div classNmae="container bordered-1"> <Employee  /> </div>

            </Context_data.Provider >
                
        </div>
    </>)
    
}


//child component
const Employee=()=> 
{

    let employee_data=useContext(Context_data);

    const {id,name,location,salary}=employee_data

    return(<>

        <div className="container">
            <h3>Employee Details</h3>

            <li>{id}</li>
            <li>{name}</li>
        </div>


        <br/>
        <br/>

        <Salary />
           
    </>)

}


//child component
const Salary=()=> 
{

    let employee_data=useContext(Context_data);

    const {id,name,location,salary}=employee_data

    return(<>

        <div className="container">

            <h3>Salary Details</h3>

            <li>{id}</li>
            <li>{salary}</li>

        </div>
           
    </>)

}

export default Hooks