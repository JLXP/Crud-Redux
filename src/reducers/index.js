//el combineReducer es para realizar el muestreo del state
import { combineReducers } from "redux";
import {productsReducer} from './productsReducer';

export default combineReducers({
    products: productsReducer
});