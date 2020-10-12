import React from 'react'
import {Route,Link,Switch, BrowserRouter} from 'react-router-dom'

import Uxui from './Uxui'
import Display from './Display'
import Displaydata from './display.json'


const Home=(props)=>
{

    return(
        <>
            <BrowserRouter>
                <div className="py-2 container-fluid bg-light">
                    <h2 className="py-5 text-center"> HOME COMPONENT </h2>
    
                    {/*-- img cards with this keyword -- */}
    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 my-5">

                                <div classNme="card ">
                                    <div className="card-body ">

                                        <ul className="list-group my-5 ">
                                            {
                                                Displaydata.map((d,index)=>
                                                    {
                                                        return(<>
                                                            <li className="list-group-item bg-p " key={index} >
                                                                
                                                                <Link to={`${props.match.path}/${d.name}`} >
                                                                    {d.name}
                                                                </Link>

                                                            </li>
                                                        </>)
                                                    }
                                                )
                                            }
                                        </ul>

                                    </div>
                                </div>
    
                            </div>
    
    
                            <div className="col-lg-9">

                                <Switch>
                                    <Route exact path={`${props.match.path}`}  component={Uxui} />
                                    <Route path={`${props.match.path}/:name`} component={Display} />
                                </Switch>
    
                            </div>
                        </div>
                    </div>
    
                </div>
            </BrowserRouter>

            
        </>
    )


}



export default Home;