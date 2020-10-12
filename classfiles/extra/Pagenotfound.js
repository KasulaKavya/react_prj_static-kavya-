import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Pagenotfound extends Component
{

    render()
    {
        return(<>

            <div className="container p-5">

                <h2 className="display-2 text-weight-bold" > 404-ERROR </h2>

                <h3> PAGE NOT FOUND </h3>

                <Link to="/home" > <button className="btn btn-info"> GO TO HOME </button></Link>

            </div>


        </>)
    }

}

export default Pagenotfound;