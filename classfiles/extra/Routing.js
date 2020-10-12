import React from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'


//components
import Header from './Header.js'
import Footer from './Footer.js'
import Home from './Home.js'
import About from './About.js'
import UserDisplay from './UserDisplay.js'
import Contact from './Contact.js'
import Production from './Production.js'
import User_Restapi from './user_Restapi.js'
import Restapi_view from './Restapi_view.js'
import Registration from './Registration.js'
import Form_edit from './Form_edit.js'
import Usestate from './UseState.js'
import Useeffect from './Useeffect.js'
import Usecontext from './Usecontext.js'
import Pagenotfound from './Pagenotfound.js'




const Routing=()=>
{
    return(
        <>

            <BrowserRouter>

                {/* header */}

                   <Header />

                {/* header */}



                {/* router path configuration */}
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/userdisplay" component={UserDisplay} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/production" component={Production} />
                    <Route path="/usestate" component={Usestate} />
                    <Route path="/useeffect" component={Useeffect} />
                    <Route path="/usecontext" component={Usecontext} />
                    

                    {/* HTTP RESTAPI component */}
                    <Route exact path="/user" component={User_Restapi} />
                    <Route path="/user/view/:idno" component={Restapi_view} />
                    <Route path="/sign up" component={Registration} />
                    <Route path="/user/edit/:idno" component={Form_edit} />
                    

                    {/* redirect to default component */}
                    <Redirect to={`/home`} />

                    {/* default pagenotfound component */}
                    <Route component={Pagenotfound}  />
                    
                </Switch>



                {/* footer */}

                  <Footer />

                {/* footer */}


            </BrowserRouter>

        </>
    )
}


export default Routing;