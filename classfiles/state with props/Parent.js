import React, { Component } from 'react';

//import child Component into Parent
import Child from './Child.js';

let email="kumar@gmail.com"

class Parent extends Component {


    render()
    {
        return (<>
            <div className="container border p-5">

                <h2> PARENT COMPONENT... </h2>

                { email }

                <hr />
         
                {/*  Child Component Name loading into Parent */}
                <Child  email={email} />

            </div>
        </>)
       
    }

}


export default Parent;