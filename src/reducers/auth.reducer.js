import {authConstant} from "../actions/constants"
const initState={
    firstName:'',
    lastName:'',
    email:'',
    authenticating: false,
    authenticated: false,
    error:null
}

export default(state = initState,action)=>{
   switch(action.type){

       case `${authConstant.USER_LOGIN}_REQUEST`:
            return state={
              ...state,
              authenticating:true
            }
        case `${authConstant.USER_LOGIN}_SUCCESS`:
            return state={
                ...state,
                ...action.payload.user,
                authenticated:true,
                authenticating: false
            }
        case `${authConstant.USER_LOGIN}_FAILURE`:
            return state={
                ...state,
                authenticating: false,
                authenticated:false,
                error:action.payload.error
            }
        case `${authConstant.USER_LOGOUT}_REQUEST`:
            break;
        case `${authConstant.USER_LOGOUT}_SUCCESS`:
            return state={
                ...initState 
            }
        case `${authConstant.USER_LOGOUT}_FAILURE`:
            return state={
                ...state,
                error:action.payload.error
            } 
   }
   return state;
}