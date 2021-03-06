import {types} from '../types/index';

const initialState = {
    alert:null
}


export const alertReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.SHOW_ALERT:
            return{
                ...state,
                alert: action.payload
            }
        case types.HIDDEN_ALERT:
            return{
                ...state,
                alert:null
            }
        default:
            return state;
    }
}