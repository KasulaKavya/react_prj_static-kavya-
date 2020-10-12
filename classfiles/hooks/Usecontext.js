import React,{ useState , useContext } from 'react'

const Empd=React.createContext();

//main component
const UseContextHooks=()=> {

    const [emp]=useState({ id:1001, name:'kumar', location:'Hyderabad', salary:987452 });

    return (<>
        <div className="container p-5">

            <h3>UseContext Example</h3>

            <li>{emp.id}</li>
            <li>{emp.name}</li> 
            <li>{emp.location}</li> 
            <li>{emp.salary}</li> 

            <br /><br />

            <Empd.Provider value={emp}>
                <Employee  />
            </Empd.Provider>
                
        </div>
    </>)
}


//child component
const Employee=()=> 
{

    let empdata=useContext(Emp);

    const {id,name,location,salary}=empdata

    return(<>

        <h3>Employee Component</h3>

        <li>{id}</li>
        <li>{name}</li>

        <br/><br/>

        <Salary />
           
    </>)

}


//child component
const Salary=()=> 
{

    let empdata=useContext(Emp);

    const {id,name,location,salary}=empdata

    return(<>

        <h3>Salary Component</h3>

        <li>{id}</li>
        <li>{salary}</li>
           
    </>)

}

export default UseContextHooks
