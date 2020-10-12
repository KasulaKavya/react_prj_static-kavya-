import React from 'react'
import Hoc from './WithCounter'

const Mousecounter=(props)=> {

    const {count,increment}=props

            return(
            <div className="container py-3">
                    <h3>Mouse Counter</h3>

                    <button className="btn btn-success" 
                    onMouseOver={ increment }>
                        Mouse Hover for Total Counts:  { count }
                    </button>


            </div>
        )
}

export default Hoc(Mousecounter,10)