import { types } from '../types/index';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';


//Crear nuevos productos

export function createNewProductAction(formProductValues){

    
    console.log(formProductValues);
    return async(dispatch) => { 
        dispatch( addProduct());
        try{
            //Insertar en la api
            await clientAxios.post('/products',formProductValues);
            //si todo sale bien, actualizar el state
            dispatch(addProductSucess(formProductValues));

            Swal.fire(
                'Sucess',
                'The product was added in a product way',
                'success'
            );
        }catch(error){
            console.log(error);
            //si hay un error cambia el state
            dispatch(addProductError(true));

            //alerta de error
            Swal.fire({
                icon:'error',
                title: 'There was an error',
                text:'There was an error, try again'
            });
        }
    }
}


export function editNewProductAction(formProductValues){
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

//Si hubo error
const addProductError = (state) => ({
    type: types.NEW_PRODUCT_ERROR,
    payload: state
});

//Funcion que descarga los productos de la base de datos

export const getProductsAction = () => {
    return async (dispatch) => {
        dispatch(downloadProducts());

        try{
            const response = await clientAxios.get('/products');
            dispatch(downloadProductSucess(response.data));


        }catch(error){
            dispatch(downloadProductError(true));

            Swal.fire({
                icon:'error',
                title: 'There was an error',
                text:'There was an error, try again'
            });
        }
    }
}

const downloadProducts = () => ({
    type: types.START_DOWNLOAD_PRODUCTS,
    payload: true
})

const downloadProductSucess = (response) => ({
    type: types.DOWNLOAD_PRODUCTS_SUCESS,
    payload: response
});

const downloadProductError = (state) => ({
    type: types.DOWNLOAD_PRODUCTS_ERROR,
    payload: state
});

export const deleteProductAction = (id) => {
    return async (dispatch) => {
        dispatch(getProductDelete(id));

        try{
            await clientAxios.delete(`/products/${id}`);
            dispatch(deleteProductSucess());
            //Si se elimina, mostrar alerta
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }catch(error){
            dispatch(deleteProductError(true));
        }
        
    }
}

const getProductDelete = (id)=> ({
    type: types.GET_PRODUCT_DELETE,
    payload: id
});

const deleteProductSucess = () =>({
    type: types.PRODUCT_DELETE_SUCESS
});

const deleteProductError = (state) => ({
    type: types.PRODUCT_DELETE_ERROR,
    payload:state
})

//Colocar producto en edicion
export const getProductEdit = (product) => {
    console.log(product);
    return (dispatch) =>{
        dispatch(getProductSActionEdit(product));
    }
}

const getProductSActionEdit = (product)=> ({
    type: types.GET_PRODUCT_EDIT,
    payload:product
});

//Edita un registro en la api y state
export const editProductAction = (product) => {
    return async(dispatch) => {
        dispatch(editProduct());

        try{

            await clientAxios.put(`/products/${product.id}`,product);
            dispatch(editproductSucess(product));

        }catch(error){
            dispatch(editProductError());
        }
    }
}

const editProduct = () => ({
    type: types.START_EDIT_PRODUCT,
    
})

const editproductSucess = (product) => ({
    type: types.PRODUCT_EDIT_SUCESS,
    payload: product
})

const editProductError = () => ({
    type: types.PRODUCT_EDIT_ERROR,
    
})
