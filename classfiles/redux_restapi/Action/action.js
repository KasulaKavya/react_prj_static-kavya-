import axios from 'axios'

const url="https://jsonplaceholder.typicode.com/users"

const Action=()=>
{
    return{
        type:'action_user',
        payload: axios.get(url).then((res)=>res.data)
    }
}

export default Action;