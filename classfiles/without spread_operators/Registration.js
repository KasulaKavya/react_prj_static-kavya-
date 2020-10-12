import React,{Component} from 'react'
import axios from 'axios'


const url="http://localhost:3002/users"

class Registration extends Component
{

    constructor(props)
    {

        super(props)

        this.state={
            name:'',
            email:'',
            location:'',
            course:'',
            phone:''
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
        
        await axios.post(url,regdetails).then(()=> this.props.history.push('/users'))
    
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

                <button className="btn btn-primary mb-3" type="submit"> Submit</button>

            </form>
        </>)
    }
    
}


export default Registration;