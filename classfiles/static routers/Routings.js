import React from 'react';

//react-router-dom
import { BrowserRouter, Route, Link , Switch , Redirect } from 'react-router-dom';


//Components
import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import About from './About'

import Services from './Services'
import Uxui from './Uxui'

import Portfolios from './Portfolios'
import Contact from './Contact'
import Parent from './props/Parent'
import Stateobject from './states/index.js'
import Pagenotfound from './Pagenotfound'
import Lifecyclemethods from './Lifecyclemethods'
import UserRestapi from './UserRestapi';
import Userview from './Userview';
import Production from './Production'
//import Hoc from './HOC/Hoc';

const Routings=()=> {

    return (<>
       <BrowserRouter>

            {  /*  NAVBAR   */}

                <Header />

            {  /*  NAVBAR   */}


           


            {  /* MAIN CONTENT   */}
        <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/home" component={Home} />
           <Route path="/about" component={About} />
           <Route exact path="/services" component={Services} />
           <Route path="/services/ux-ui" component={Uxui} />
           
           <Route path="/portfolios" component={Portfolios} />
           <Route path="/contact" component={Contact} />
           <Route path="/props" component={Parent} />
           <Route path="/states" component={Stateobject} />
           <Route path="/states" component={Stateobject} />
           <Route path="/lcm" component={Lifecyclemethods} />
           <Route exact path="/users" component={UserRestapi} />
           <Route path="/users/:idno" component={Userview} />
           <Route exact  path="/production" component={Production} />
           <Route path="/production/ux-ui" component={Uxui} />
           {/* <Route path="/hoc" component={Hoc} /> */}

           <Redirect to={`/services`} />
           <Route  component={Pagenotfound} />
           
        </Switch>
           {  /* MAIN CONTENT   */}



           {  /*  FOOTER   */}

            <Footer />

           {  /*  FOOTER   */}
        

    </BrowserRouter>
    </>)
}


export default Routings;