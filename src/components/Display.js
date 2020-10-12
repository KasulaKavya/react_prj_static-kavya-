import React from 'react';
import Displaydata from './display.json';
import Pagenotfound from './Pagenotfound';

const Display=(props)=> 
{

    const resultdata=(i)=>
    {       

        let { id, name, pic }=Displaydata[i]

        return(<>
                <div className="container p-2 m-2">
                    <img src={ pic }  className="w-100" style={{ height:'500px' }} />
                </div>
            </>); 
    
    }


    switch(props.match.params.name) 
    {
        case '1st Image': return(<> {resultdata(0)} </>); break;
        case '2nd Image': return(<> {resultdata(1)} </>); break;
        case '3rd Image': return(<> {resultdata(2)} </>); break;
        case '4th Image': return(<> {resultdata(3)} </>); break;
        default: return(<Pagenotfound />); break;
    }

}

export default Display;
