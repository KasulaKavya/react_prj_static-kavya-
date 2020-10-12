import React from 'react'
import {Route,Link,Switch, BrowserRouter} from 'react-router-dom'

import Uxui from './Uxui'
import Display from './Display'
import Routing from './routing.json'


const Production=(props)=>
{
  
    return(
        <> <BrowserRouter>
            <div className="container-fluid p-5">
                <div className="row">

                    <div className="col-lg-3 ">
                        <ul className="list-group">
                            {
                                Routing.map((data,index)=>
                                {
                                    return(<> 
                                        <li className="list-group-item" key={index} >
                                            <Link to={`${props.match.path}/${data.name}`} className="list-group-link text-uppercase" > {data.name}  </Link>
                                        </li>
                                    </>)                                                                                                      
                                })

                            }
                        </ul>
                    </div>

                    <div className="col-lg-9">

                        <Switch>
                            <Route exact path={props.match.path} component={Uxui} />
                            <Route path={`${props.match.path}/:name`} component={Display} />
                        </Switch>

                    </div>

                </div>
                               
            </div>
            </BrowserRouter>
        </>
    )

        
    

}


export default Production;