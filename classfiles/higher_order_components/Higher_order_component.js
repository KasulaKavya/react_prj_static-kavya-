import React from 'react';

//child Components
import Clickscounter from './Clickscounter';
import Mousecounter from './Mousecounter';

export default function HigherOrder() {
    return (<>
        <div>
                <Clickscounter /> 
                <Mousecounter  />
        </div>
    </>)
}