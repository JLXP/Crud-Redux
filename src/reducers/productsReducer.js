import { types } from '../types/index';

//cada reducer tiene su propio state

const initialState = {
    products:[],
    error:null,
    loading:false,
    productDelete: null,
    productEdit:null
}

//siempre hay retornar un state en el default
export const productsReducer = (state = initialState, action)=>{
    switch(action.type){
        //Este es un tipo de if
        case types.START_DOWNLOAD_PRODUCTS:
        case types.NEW_PRODUCT:
            return {
                ...state,
                loading:action.payload,
                
            }
        case types.NEW_PRODUCT_SUCESS:
            return{
                ...state,
                loading:false,
                products:[...state.products,action.payload]
            }
        case types.PRODUCT_EDIT_ERROR:
        case types.DOWNLOAD_PRODUCTS_ERROR:
        case types.NEW_PRODUCT_ERROR:
        case types.PRODUCT_DELETE_ERROR:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        case types.DOWNLOAD_PRODUCTS_SUCESS:
            return{
                ...state,
                loading: false,
                error:null,
                products:action.payload
            }
        case types.GET_PRODUCT_DELETE:
            return{
                ...state,
                productDelete:action.payload
            }
        case types.PRODUCT_DELETE_SUCESS:
            return{
                ...state,
                products: state.products.filter(product => product.id !== state.productDelete),
                productDelete:null
            }
        case types.GET_PRODUCT_EDIT:
            return {
                ...state, 
                productEdit:action.payload
            }
        case types.PRODUCT_EDIT_SUCESS:
            return{
                ...state, 
                productEdit:null,
                products: state.products.map(product => 
                    product.id === action.payload.id ? product = action.payload : product
                )
            }
        default: 
            return state;
    }
}