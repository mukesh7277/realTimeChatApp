import { userConstant } from "../actions/constants"

const initState={
    users:[],
    conversations:[]
}

export default(state= initState,action ) => {
    switch(action.type){
        case `${userConstant.GET_REALTIME_USERS}_REQUEST`:
            break;
        case `${userConstant.GET_REALTIME_USERS}_SUCCESS`:
            return state={
                ...state,
                users:action.payload.users
            }
        case userConstant.GET_REALTIME_MESSAGES:
            return state={
                ...state,
                conversations:action.payload.conversations
            }
    }
    return state;
}