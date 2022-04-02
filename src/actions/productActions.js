import { types } from '../types/index';

//Crear nuevos productos

export function createNewProductAction(formProductValues){
    console.log(formProductValues);
    return (dispatch) => { 
        dispatch( addProduct());
        try{
            dispatch(addProductSucess(formProductValues));
        }catch(error){
            dispatch(addProductError());
        }
    }
}

const addProduct = () => ({
    type:types.NEW_PRODUCT,
    payload:true
});

//Si el producto se guarda en la base de datos
const addProductSucess = (formProductValues) => ({  
    type:types.NEW_PRODUCT_SUCESS,
    payload: formProductValues
});

//si hubo error
const addProductError = () => ({
    
});