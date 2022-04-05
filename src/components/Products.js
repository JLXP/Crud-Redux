import React,{Fragment, useEffect} from 'react'

//Redux
import { useSelector, useDispatch} from 'react-redux';
import {getProductsAction} from '../actions/productActions';

import { Product } from './Product';

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    //Consultar la api
    const loadingProducts = ()=> {
      dispatch(getProductsAction());
    }
    
    loadingProducts();
  }, [dispatch]);

  //obtener el state
  const products = useSelector(state => state.products.products);
  const error = useSelector(state => state.products.error);
  const loading = useSelector(state => state.products.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">There was an error</p>:null}
      {loading ? <div className="text-center">Loading....</div>:null}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead  className="bg-primary table-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? 'Doesn´t products ':(
                products.map(product =>(
                  <Product
                    key={product.id}
                    product={product}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
}
