import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

import Swal from 'sweetalert2';

//Redux
import {useDispatch} from 'react-redux';
import {deleteProductAction, getProductEdit} from '../actions/productActions';



export const Product = ({product}) => {
    //se hace la destructuracion de datos
    const {name, price, id} = product;

    let navigate = useNavigate();

    const dispatch = useDispatch();

    //Confirmar si desea eliminarlo
    const confirmDeleteProduct = (id) => {
        //preguntar al usuario 
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

            //pasarlo al action
            dispatch(deleteProductAction(id));

            
          }
        })

        
    }

    const returnEdition = (product) => {
      
      dispatch(getProductEdit(product));
      navigate(`/products/edit/${product.id}`);
    }

  return (
    <tr key={product.id}>
        <td>{name}</td>
        <td><span className="font-weight-bold">${price}</span></td>
        <td className="actions">
            <button onClick={()=> returnEdition(product)} className="btn btn-primary mr-2">
                Editar
            </button>
            <button type="button" className="btn btn-danger" onClick={()=> confirmDeleteProduct(id)}>Eliminar</button>
        </td>
    </tr>
  )
}
