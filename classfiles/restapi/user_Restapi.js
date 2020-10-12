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


    // asynchrous function used in componentdidmount -> (axios_code represented in seperate function_fromat)
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

                                        <td> {d.id} </td>
                                        <td> {d.name} </td>
                                        <td> {d.email} </td>
                                        <td> <Link to={`user/${d.id}`} className="btn btn-primary">View</Link> </td>
                                        <td> <button className="btn btn-info">Edit</button> </td>
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

