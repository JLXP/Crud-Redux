import { types } from '../types/index';

//Crear nuevos productos

export function createNewProductAction(formProductValues){
    return (dispatch) => { 
        dispatch( addProduct());
        try{
            dispatch(addProductSucess(formProductValues));
        }catch(error){
            dispatch(addProductError(true));
        }
    }
}

const addProduct = () => ({
    type:types.NEW_PRODUCT,
});

//Si el producto se guarda en la base de datos
const addProductSucess = (formProductValues) => ({
    type:types.NEW_PRODUCT_SUCESS,
    payload: formProductValues
});

//si hubo error
const addProductError = (formProductValues) => ({
    type:types.NEW_PRODUCT_ERROR,
    payload: formProductValues
});