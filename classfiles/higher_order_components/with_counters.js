import React from 'react'

//Higher Order Component....
const Hoc=(Orginalcomponent,no)=> {

return class extends React.Component {

    constructor(props)
    {
    super(props);
    this.state={ count:0 }
    }

    increment=()=>
    {
        this.setState({ count:this.state.count+no })
    }

    render()
    {
        return(<>
            <Orginalcomponent count={this.state.count} increment={this.increment}  />
    </>)
    }

}

}

export default Hoc