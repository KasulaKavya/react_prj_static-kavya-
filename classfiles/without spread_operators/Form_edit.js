import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const url="http://localhost:3002/users"

class Form_edit extends Component
{

    constructor(props)
    {

        super(props)

        this.state = {
            name:'',
            email:'',
            location:'',
            course:'',
            phone:'',
            msg:''
        }

    }


    // input textbox collection
    nameHandler=(e)=>
    {
        this.setState( {name : e.target.value} )
    }

    emailHandler=(e)=>
    {
        this.setState( {email : e.target.value} )
    }

    locationHandler=(e)=>
    {
        this.setState( {location : e.target.value} )
    }

    courseHandler=(e)=>
    {
        this.setState( {course : e.target.value} )
    }

    phoneHandler=(e)=>
    {
        this.setState( {phone : e.target.value} )
    }


    //HTTP_RESTAPI_CALLS
    async componentDidMount()  
    {
        await axios.get(`${url}/${this.props.match.params.idno}`).then( (res)=> this.setState(res.data) )
    }  


    //Get form data after submit
    submitHandler=async (event)=>
    {
        //control page loading after submit Formdata
        event.preventDefault()

        const regdetails={
            'name':this.state.name,
            'email':this.state.email,
            'location':this.state.location,
            'course':this.state.course,
            'phone':this.state.phone
        }
        
        //alert( JSON.stringify(regdetails) ); 
        

        await axios.put(`${url}/${this.props.match.params.idno}`,regdetails).then(()=> this.props.history.push('/users'))
    
    }


    render()
    {
        const {name,email,location,course,phone}=this.state
        return(<>
            <h2 className="text-center py-3"> User Registration</h2>

            <form className="mx-auto w-50" onSubmit={this.submitHandler}>

                <div className="form-group p-1"> 
                    <label>Name</label>
                    <input className="form-control" type="text" value={name}
                    onChange={this.nameHandler.bind(this)} required />
                </div>

                <div className="form-group "> 
                    <label>Email</label>
                    <input className="form-control" type="text" value={email}
                    onChange={this.emailHandler.bind(this)} required />
                </div>

                <div className="form-group "> 
                    <label>Location</label>
                    <input className="form-control" type="text" value={location}
                    onChange={this.locationHandler.bind(this)} required />
                </div>

                <div className="form-group "> 
                    <label>Course</label>
                    <input className="form-control" type="text" value={course}
                    onChange={this.courseHandler.bind(this)} required />
                </div>

                <div className="form-group "> 
                    <label>Phone</label>
                    <input className="form-control" type="text" value={phone}
                    onChange={this.phoneHandler.bind(this)} required />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Update</button> &nbsp;&nbsp;
                    <Link to={`/user`} className="btn btn-info">Goback</Link>
                </div>

            </form>
        </>)
    }
}


export default Form_edit;
/*



import React, { Component } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

let url=`http://localhost:3002/users`;


class Form_edit extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

                    name:'',
                    email:'',
                    location:'',
                    course:'',
                    phone:'',
                    msg:''
        
        }


    
    }


    
//name input textbox collection
nameHandler=(e)=>
{
    this.setState({  name:e.target.value  })
}


//email input textbox collection
emailHandler=(e)=>
{
    this.setState({  email:e.target.value  })
}


//Location input textbox collection
locationHandler=(e)=>
{
    this.setState({  location:e.target.value  })
}


//course input textbox collection
courseHandler=(e)=>
{
    this.setState({  course:e.target.value  })
}

//Phone input textbox collection
phoneHandler=(e)=>
{
    this.setState({  phone:e.target.value  })
}


async componentDidMount()  //HTTP_RESTAPI_CALLS
 {
     await axios.get(`${url}/${this.props.match.params.idno}`).then( 
         (res)=> this.setState(res.data) )
 }  

   //Get form data after submit 
   submitHandler=async (event)=> {

    //control page loading after submit Formdata
    event.preventDefault();

    const registrationdetails=
    {
        "name":this.state.name,
        "email":this.state.email,
        "location":this.state.location,
        "course":this.state.course,
        "phone":this.state.phone
    }
   
   await axios.put(`${url}/${this.props.match.params.idno}`,registrationdetails)
   .then( ()=> this.props.history.push('/users') );

} 




    render() {
        
      const { name,email,location,course,phone }=this.state


        return (<>
             <div className="container pt-5">
                
                <h3 className="text-center pb-3">EDIT_REGISTRATION....</h3>
                    
                <form className="w-50 mx-auto" onSubmit={ this.submitHandler }>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={name}
                        onChange={ this.nameHandler.bind(this) } />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={email} 
                        onChange={this.emailHandler.bind(this) } />
                    </div>


                    <div className="form-group">
                        <label>Location</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={location} 
                        onChange={this.locationHandler.bind(this) } />
                    </div>



                    <div className="form-group">
                        <label>Course</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={course} 
                        onChange={this.courseHandler.bind(this) } />
                    </div>


                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                        type="number" 
                        className="form-control"
                        value={phone} 
                        onChange={this.phoneHandler.bind(this) } />
                    </div>


                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Update</button> &nbsp;&nbsp;
                        <Link to={`/user`} className="btn btn-info">Goback</Link>
                    </div>


                </form>




            </div>
        </>)
    }
}

export default Form_edit;
*/