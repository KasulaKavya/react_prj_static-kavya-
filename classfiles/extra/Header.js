import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './nav.css'



class Header extends Component
{


    render()
    {
        return(
            <>
                <nav className="navbar navbar-expand-lg bg-l justify-content-end" >

                    <ul className="navbar-nav p-2 m-2 ">
                        <li className="nav-item">
                            <Link to="/Home" className="nav-link text-white active "> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link text-white "> About </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Service" className="nav-link text-white "> Service </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link text-white "> Contact </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/production" className="nav-link text-white "> Production </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign up" className="nav-link text-white "> Registration </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/usestate" className="nav-link text-white "> UseState </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/useeffect" className="nav-link text-white "> UseEffect </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/usecontext" className="nav-link text-white "> UseContext </Link>
                        </li>
                    </ul>

                </nav>


            </>
        )

    }
}


export default Header;