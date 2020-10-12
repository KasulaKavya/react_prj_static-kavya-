import React,{Component} from 'react'
import action_user from './../Action/action.js'
import Service from './Service.js'

//connect
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


class Container extends Component
{

    

    render()
    {
        return(<>

            <div className="container py-4 my-4 ">
                <h3 className="text-center py-2 my-3 "> ACCESSING DATA FROM REDUX IN REACT COMPONENT </h3>
            </div>
    
            <Service result={this.props.userinfo} />
    
        </>)
    }

    componentDidMount()
    {
       this.props.action_user(); 
    }

}


const mapStateToProps=(state)=>
{
    //console.log(state)
    return { userinfo: state.UserReducer.userdata }
}

const mapDispatchToProps=(dispatch)=>
{

    return bindActionCreators({action_user},dispatch)

}


export default connect(mapStateToProps,mapDispatchToProps) (Container)




