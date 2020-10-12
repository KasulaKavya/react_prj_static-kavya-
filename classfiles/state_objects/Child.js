import React,{Component} from 'react'


class Child extends Component
{

    constructor(props)
    {

        super(props)

        this.state={
            id:this.props.id,
            name:this.props.name,
            email:this.props.email,
            lang:this.props.lang
        }

    }



    render()
    {

        let {id,name,email,lang}=this.state;

        return(
            <>

                <div className="container border p-5 m-5" >

                    <h1> Child Component </h1>

                    <p> { id } </p>
                    <p> { name } </p> 
                    <p> { email } </p>
                    <p> { lang } </p>

                    <button onClick={()=> this.setState({ email:'sweety@gmail.com',name:'sweety',lang:['full stack','python'] })} > click </button>

                </div>

            </>
        )
    }

}


export default Child;