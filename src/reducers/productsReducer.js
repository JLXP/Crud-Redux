import { types } from '../types/index';

//cada reducer tiene su propio state

const initialState = {
    products:[],
    error:null,
    loading:false
}

//siempre hay retornar un state en el default
export const productsReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.NEW_PRODUCT:
            return {
                ...state,
                loading:true,
            }
        case types.NEW_PRODUCT_SUCESS:
            return{
                ...state,
                loading:false,
                products:[...state,action.payload]
            }
        default: 
            return state;
    }
}