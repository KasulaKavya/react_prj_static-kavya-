import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'




const Header=()=>
{

    return(<>

        <nav className="navbar navbar-expand-lg bg-l justify-content-end ">

            <ul className="navbar-nav "> 
                <li className="nav-item ">
                    <Link className="nav-link text-white active" to="/home" > Home </Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link text-white active" to="/user" > RestapiData </Link>
                </li>
                <li className="nav-item dropdown" >
                    <Link id="navbar dropdown" data-toggle="dropdown"
                    className="dropdown-toggle nav-link text-white " to="/hooks" > Hooks </Link>

                    <div className="dropdown-menu ">
                        <Link className="nav-link text-black active" to="/hooks" 
                        style={{ fontSize:"26px"}} > Example-1 </Link>
                        <Link className="nav-link text-black active" to="/hooks_ex_1" 
                        style={{ fontSize:"26px"}} > Example-2 </Link>
                    </div>
                </li>
                
                <li className="nav-item dropdown ">
                    <Link id="navbar dropdown "  data-toggle="dropdown"
                    className="dropdown-toggle nav-link text-white " to="/login" > Account </Link>

                    <div className="dropdown-menu" >
                        <Link className="nav-link text-black active" to="/registration" 
                        style={{ fontSize:"26px"}}> Registration </Link>
                        <Link className="nav-link text-black active" to="/login" 
                        style={{ fontSize:"26px"}}> Log In </Link>          
                    </div>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link text-white active" to="/contact" > Contact </Link>
                </li>

            </ul>

        </nav>

    </>)


}


export default Header;