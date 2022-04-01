import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

//Components
import { Header } from './components/Header';
import { Products,NewProduct,EditProduct } from './components';


function App() {
  return (
    <BrowserRouter> 
      <Header/>
      <Routes> 
        <Route path = "/" element = {<Products/>}/>
        <Route path = "/products/new" element = {<NewProduct />}/>
        <Route path = "/products/edit/:id" element = {<EditProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
