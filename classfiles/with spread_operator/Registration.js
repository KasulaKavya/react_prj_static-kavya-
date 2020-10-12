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
    inputHandler=(e)=>
    {
        this.setState({ ...this.state , [e.target.name] : e.target.value } )
    }

    


    //Get form data after submit
    submitHandler=async (event)=>
    {
        //control page loading after submit Formdata
        event.preventDefault()
        
        //alert( JSON.stringify(regdetails) ); 
        
        await axios.post(url,this.state).then(()=> this.props.history.push('/users'))
    
    }


    render()
    {
        const {name,email,location,course,phone}=this.state
        return(<>
            <h2 className="text-center py-3"> User Registration</h2>

            <form className="mx-auto w-50" onSubmit={this.submitHandler}>

                <div className="form-group p-1"> 
                    <label>Name</label>
                    <input className="form-control" type="text"
                    name="name" value={name}
                    onChange={this.inputHandler.bind(this)} required />
                </div>

                <div className="form-group "> 
                    <label>Email</label>
                    <input className="form-control" type="text"
                    name="email" value={email}
                    onChange={this.inputHandler.bind(this)} required />
                </div>

                <div className="form-group "> 
                    <label>Location</label>
                    <input className="form-control" type="text" 
                    name="location" value={location}
                    onChange={this.inputHandler.bind(this)} required />
                </div>

                <div className="form-group "> 
                    <label>Course</label>
                    <input className="form-control" type="text"
                    name="course" value={course}
                    onChange={this.inputHandler.bind(this)} required />
                </div>

                <div className="form-group "> 
                    <label>Phone</label>
                    <input className="form-control" type="text"
                    name="phone" value={phone}
                    onChange={this.inputHandler.bind(this)} required />
                </div>

                <button className="btn btn-primary mb-3" type="submit"> Submit</button>

            </form>
        </>)
    }
}


export default Registration;