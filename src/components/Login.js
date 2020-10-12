import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class Login extends Component
{

    constructor(props)
    {
        super(props)
        this.state={email:'', password:''}
    }


    // input textbox collection
    inputHandler=(e)=>
    {
        this.setState({ ...this.state , [e.target.name] : e.target.value } )
    }


    Registration_fun=()=>
    { 
        return(<> <Link to={'/registration'} > </Link> </>)
    }

    
    render()
    {
        const {email,password}=this.state

        return(
            <>

                <div className="py-2 container">
                    <h2 className="p-2 m-4 text-center"> LOG IN </h2>
                </div>
    
    
                <div className="container mb-5 pb-5 pt-2 ml-5">
                    <div className="row ml-5 pl-5">
                        <div className="col-12 mx-5 pl-5">

                            <div className="card border-0 bg-light w-75 justify-content-center mx-5 pl-5 py-4">
                                <div className="card-body">

                                    <form className="mx-auto w-50 " >
                                        
                                        <div className="form-group p-1">
                                            <label> ENTER EMAIL ID : </label>
                                            <input className="form-control" type="email" 
                                            value={email} name="email" onChange={ this.inputHandler.bind(this)}  />
                                        </div>

                                        <div>
                                            <label> ENTER PASSWORD : </label>
                                            <input className="form-control" type="password" 
                                            value={password} name="password" onChange={ this.inputHandler.bind(this)}  />
                                        </div>

                                        <div className="form-group p-1">

                                            <Link to="/home" className="btn btn-success mr-5 my-4" > Submit </Link>
                                            
                                            <Link to={'/registration'} className="btn btn-primary ml-5 my-4" > Create Account </Link>

                                        </div>

                                    </form>

                                </div>
                            </div>
                             
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}


export default Login;