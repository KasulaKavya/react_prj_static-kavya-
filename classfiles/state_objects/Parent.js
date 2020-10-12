import React,{Component} from 'react'
import Child from './Child.js'


var id=1, name="kavya", email="kavya@gmail.com", lang=["Telugu","English","Hindi"]

class Parent extends Component
{

    render()
    {

        return(
            <>
                <div className="container border p-5 " >

                    <h1> Parent Component </h1>

                    {id} <br/> {name} <br/> {email} <br/>  {lang} <br/>

                    {/*
                    { 
                        obj.map((data,i)=> <li> {data} </li>) 
                    }
                    */}
                    
                    <Child id={id} name={name} email={email} lang={lang} />

                </div>

            </>
        )
    }

    

}


export default Parent;