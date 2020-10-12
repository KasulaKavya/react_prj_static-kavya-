function UserReducer(state={},action)
{
    switch(action.type)
    {
        case 'action_user':return { ...state, userdata: action.payload}; break;
        default:return state; //new state
    }

}

export default UserReducer;