import React,{Component} from 'react'
import { Link  } from 'react-router-dom';


class Uxui extends Component 
{

    render()
    {
        return (<>
      
            <h2 className="text-center pb-3">We provide UX/UI Production service </h2>

            <p>
            User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.
            Become a Design Pro with these valuable skills. Start Your Course Today. Join Millions of Learners From Already Learning On Udemy! Save up to 90%! Learn on your Schedule. Object-Oriented. 40M+ Students Enrolled. Risk Free Learning. Download To Your Phone.
            </p>

            <img src="https://miro.medium.com/max/3146/1*RbND5-zYgdvY8faYLHxk3Q.png" className="w-100" />

            <ul>
                <li>Interaction Design</li>
                <li><Link to={'/production/ux-ui/wireframes'}>Wireframes</Link></li>
                <li>Prototypes</li>
                <li>User Research</li>
                <li>Visual Design</li>
                <li>Layouts</li>
                <li>Typography</li>
                <li>Colors</li>
                <li>Graphic Design</li>
            </ul>
            
        </>)
    }

}


export default Uxui;