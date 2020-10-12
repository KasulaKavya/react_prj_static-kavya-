import React from 'react'

//import Hoc
import Hoc from './WithCounter';

//connect-of-react-redux
//import connect from 'react-redux';


const Clickscounter=(props)=>{

    const {count,increment}=props

        return (
            <div className="container py-3">
                    <h3>Clicks Counter</h3>

                    <button className="btn btn-info" 
                    onClick={ increment }>
                        Clicks for Total Counts:  {  count }
                    </button>
            </div>
        )
   
}


export default Hoc(Clickscounter,5)

//export default Clickscounter;
//export default connect(arg1,arg2)(Clickscounter);

