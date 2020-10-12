import React from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'


import Header from './Header.js'
import Footer from  './Footer.js'
import Home from './Home.js'
import Hooks from './Hooks.js'
import Hooks_ex_1 from './Hooks_ex_1.js'
import RestapiData from './Restapi_data.js'
import Restapi_data_view from './Restapi_data_view.js'
import Registration from './Registration.js'
import Form_edit from './Form_edit.js'
import Login from './Login.js'
import Contact from './Contact.js'

import Pagenotfound from './Pagenotfound.js'



const Routing=()=>
{
    return(
        <>
            <BrowserRouter>


                {/* Header */}
                    <Header /> 
                {/* Header */} 


                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    
                    {/*  restapi data */}
                    <Route exact path="/user" component={RestapiData} />
                    <Route path="/user/view/:idno" component={Restapi_data_view} />
                    <Route path="/user/edit/:idno" component={Form_edit} />
                    
                    {/*  hooks */}
                    <Route path="/hooks" component={Hooks} />
                    <Route path="/hooks_ex_1" component={Hooks_ex_1} />

                    {/*  registration */}
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Login} />

                    <Route path="/contact" component={Contact} />

                    {/* redirect to default component */}
                    <Redirect to={`/home`} />

                    {/* default pagenotfound component */}
                    <Route component={Pagenotfound} />

                </Switch>


                {/* Footer */}
                    <Footer /> 
                {/* Footer */} 


            </BrowserRouter>

        </>
    )

}

export default Routing; 