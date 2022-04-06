import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {editProductAction} from '../actions/productActions';
import {useForm} from '../hooks/useForm';
import {useNavigate} from 'react-router-dom';

export const EditProduct = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    //Nuevo state de productos
    const [product, handleInputChange, setValues] = useForm({
        name: '',
        price: Number(0),
        id:''
    });

    const producteditar = useSelector(state => state.products.productEdit);

    useEffect(() => {
        setValues(producteditar);
    }, [producteditar])
    

    
    const {name,price}=product;

    //const { name, price } = formProductValues;

    const submitEditProduct = (e) =>{
        e.preventDefault();
        dispatch(editProductAction(product));
        navigate("/");
    }

  return (
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Edit Product
                    </h2>

                    <form onSubmit={submitEditProduct}>

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
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
