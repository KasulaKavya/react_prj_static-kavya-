import React,{Component} from 'react'




class Service extends React.Component {

    constructor() {

        super();

        this.state={
            count:0,
            pictures:["1.png","2.png","3.png","4.png"]
        }
    }


    //change state object
    increment=()=>
    {
       if(this.state.count<=2)
       {
            this.setState({ count:this.state.count+1  });
       }
    }


    decrement=()=>
    {
        if(this.state.count>=1)
        {
            this.setState({ count:this.state.count-1  });
        }
    }


    render(){

        const { count, pictures }=this.state;

        return(<>
        
            <div className="conatiner p-5">
                    
                <h3 >THIS IS EXAMPLE OF STATE and setState Object</h3>

                <p>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>


                <button onClick={ this.decrement }>PRE</button> &nbsp; &nbsp; 

                { count }

                <img src={`images/${ pictures[count] }`} className="w-25" style={{ height:'150px' }} />

                &nbsp;&nbsp;
    
                <button onClick={ this.increment }>NEXT</button>           

            </div> 

        </>)
    
    }

}

export default Service;
