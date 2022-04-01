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
        default: 
            return state;
    }
}