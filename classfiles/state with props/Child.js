import React ,{ Component } from 'react';


class Child extends Component {

    constructor(props)
    {
        super(props);
    
        this.state={ email_id : this.props.email }
    }
    

    render(){

        let { email_id }=this.state;
    
        return (<>     
            <div className="container border p-5">

                <h3> Regulardata : CHILD COMPONENT... </h3>
                
                <br />
    
                { email_id } 
    
                <button onClick={ ()=> this.setState({ email_id:'vijaykkumar@gmail.com' }) }> CLick </button>
                            
        
            </div>       
        </>)
        
    }

}


export default Child;