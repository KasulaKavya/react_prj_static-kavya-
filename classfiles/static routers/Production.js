import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'

import Uxui from './Uxui'
import Singlepage from './Singlepage'



const Production=(props)=>
{

    return(
        <>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-lg-3 ">

                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link to={`${props.match.path}/ux-ui`} className="list-group-link" >UX-UI Application</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to={`${props.match.path}/singlepage web-applications`} className="list-group-link" >Single Page Web-Application </Link>
                            </li>
                        </ul>

                    </div>

                    <div className="col-lg-9">

                        <Switch>
                            <Route exact path={`${props.match.path}`} component={Uxui} />
                            <Route path={`${props.match.path}/ux-ui`} component={Uxui} />
                            <Route path='/production/singlepage web-applications' component={Singlepage} />
                        </Switch>

                    </div>

                </div>
                               
            </div>
        </>
    )

    
}


export default Production;