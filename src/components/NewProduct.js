import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';

//Actions de Redux
import { createNewProductAction } from '../actions/productActions';

export const NewProduct = () => {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [formProductValues, handleInputChange] = useForm({
        name: '',
        price: Number(0)
    });

    //Acceder al state del store del
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);

    const { name, price } = formProductValues;

    

    //cuando el usuario haga submit
    const handleSubmitForm = (e) => {
        e.preventDefault();

        //validar formulario
        if(name.trim() === '' || price <= 0) {
            return;
        }
        //si no hay erroresp

        //crear el nuevo producto
        //Manda a llamar el accion del producto
        dispatch(createNewProductAction(formProductValues));

        //Redireccionar
        navigate("/");
    }

  return (
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Add New Product
                    </h2>

                    <form onSubmit={handleSubmitForm}>

                        <div className="form-group">
                            <label>Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product Name"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Price Product</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Product Price"
                                name="price"
                                value={price}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >
                            Add
                        </button>
                    </form>

                    {loading?<p>Loading...</p>:null}
                    {error?<p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>:null}
                </div>
            </div>
        </div>
    </div>
  )
}
