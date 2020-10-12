import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const url="http://localhost:3001/users"

class RestapiData extends Component
{

    constructor(props)
    {

        super(props)

        this.state={ userdata : [' '] }

    }


    c= async()=>
    {
        await axios.get(url).then((res)=> this.setState( { userdata : res.data } ) ) 
    }


    componentDidMount()
    {
        this.c();
    }


    // delete operation function
    Delete=(id)=>
    {
        if(window.confirm(` DO YOU WANT TO DELETE ${id} NOW ? `))
        {
            axios.delete(`${url}/${id}`); //deletes selected id 
            this.c();// upadtes the table
        }
    }
    


    render()
    {

        return(<>
            <div className="container p-5 m-5">

                <table className="table table-bordered table-dark  text-center" >

                    <thead className="table table-bordered table-light"  >
                        <tr>
                            <th>S.NO</th>
                            <th>ID NO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>LOCATION</th>
                            <th colspan="3" >ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.userdata.map((x,index)=>{
                                return(<>
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.email}</td>
                                        <td>{x.location}</td>
                                        <td> <Link to={`user/view/${x.id}`} className="btn btn-primary">View</Link> </td>
                                        <td> <Link to={`user/edit/${x.id}`} className="btn btn-info">Edit</Link></td>
                                        <td> <button onClick={ ()=> this.Delete(x.id) } className="btn btn-danger">Delete</button> </td>
                                    </tr>
                                </>)
                            })
                        }
                    </tbody>

                </table>

            </div>
            
        </>)

    }
    

}


export default RestapiData;