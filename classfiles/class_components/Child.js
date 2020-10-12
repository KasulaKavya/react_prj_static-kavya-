import React,{Component} from 'react'


class Child extends Component
{

    constructor(props)
    {
        super(props)
    }

    render()
    {
        let { id,name,email,phno }=this.props
        return( 
            <>
                <div className="container border p-5 ">


                    <h1> Child Component </h1>

                    <p> {id} </p>
                    <p> {name} </p>
                    <p> {email} </p>
                    <p> {phno} </p>

                </div>
            </>
       )
    }
}

export default Child;