import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



const url='http://localhost:3002/users';


class User_Restapi extends Component
{


    constructor()
    {
        super();

        this.state={  userdata: ['']  }
    }


    // loadapi data asynchrous function
    c=async()=>
    {
        await axios.get(url).then((x)=> this.setState( {userdata : x.data} ))
    }


    //delete data from userdata
    delete=(id)=>
    {
        if(window.confirm(` DO YOU WANT TO DELETE ${id} NOW ? `))
        {
            axios.delete(`${url}/${id}`);
            this.c();
        }
    }

    render()
    {
        return(<>
            <div className="container p-5 ">
                <h2 className="text-center p-5"> HTTP RESTAPI CALLS </h2>

                <table className="table table-bordered table-dark" >

                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th colSpan="3">ACTION</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            this.state.userdata.map( (d,index)=>
                            {
                                return(
                                    <tr key={index} >

                                        <td> {index+1} </td>
                                        <td> {d.name} </td>
                                        <td> {d.email} </td>
                                        <td> <Link to={`user/view/${d.id}`} className="btn btn-primary">View</Link> </td>
                                        <td> <Link to={`user/edit/${d.id}`} className="btn btn-info">Edit</Link> </td>
                                        <td> <button onClick={ ()=> this.delete(d.id) } className="btn btn-danger">Delete</button> </td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>

            </div>
        </>)
    }


    componentDidMount()
    {
        this.c();
    }


}


export default User_Restapi;

