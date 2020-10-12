import React from 'react';
import Routing from './routing.json';
import Pagenotfound from './Pagenotfound';

const Display=(props)=> 
{

   const resultdata=(i)=>{       

    let { id, name, pic, description }=Routing[i]

        return(<> 
                <h1 className="py-2 text-uppercase ">{id} . {name}</h1>
                <img src={ pic }  className="w-75" style={{ height:'300px' }} />
                <p className="py-2"> { description } </p>
            </>); 
    
    }


    switch(props.match.params.name) 
    {
        case 'application-designing-service': return(<> {resultdata(0)} </>); break;
        case 'application-development-service': return(<> {resultdata(1)} </>); break;
        case 'digital-marketing-service': return(<> {resultdata(2)} </>); break;
        case 'mobile-application-service': return(<> {resultdata(3)} </>); break;
        default: return(<Pagenotfound />); break;
    }

}

export default Display;
