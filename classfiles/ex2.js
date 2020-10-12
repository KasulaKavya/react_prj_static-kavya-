import React,{ Fragment} from 'react';


var v="hello", a=["kavya","sweety"];
let obj={
    id:1,
    name:"kavya",
    email:"kavya@gmail.com",
}
;

// multiple object
let mo=[
    {
        id:1,
        name:"kavya",
        email:"kavya@gmail.com",
    },
    {
        id:2,
        name:"mammu",
        email:"mammu@gmail.com",
    },
    {
        id:3,
        name:"vara",
        email:"vara@gmail.com",
    },
    {
        id:4,
        name:"sindhu",
        email:"sindhu@gmail.com",
    },
]


const Home=()=>
{

    return (
        <>

            <h3> { v } </h3>

            <ul>
                <li> { v } { a[0]} </li>
                <li> { v } { a[1]} </li>
            </ul>

            {/* to access single object -> no return keyword  is used and binding of obj  must be like nrml */}
            <p> 
                {obj.id} <br/>
                {obj.name} <br/>
                {obj.email} <br/>
            </p>


            {/* to access multiple object -> in return keyword binding of obj is done */}
            {
                mo.map( ( data) =>
                    {
                        return ( 
                            <ul>
                                <li> { data.id } </li>
                                <li> { data.name } </li>
                                <li> { data.email } </li>
                            </ul>
                        ) 
                    }
                )
                
            }

        </>
    )

}

export  default Home;

