import React from 'react';
import About from './About.js';
import './css/home.css'
import Service from './Service.js'
import Contact from './Contact.js'




var v="Home Component";


export default()=>
{

    return (
        <>

            <h1> { v } </h1>

            <p className="p">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </p>

            <hr />

            <About />
            <hr />

            <Service />
            <hr />

            <Contact />
            <hr />

        </>
    )

}



