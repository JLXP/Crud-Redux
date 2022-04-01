import { createStore, applyMiddleware, compose } from "redux";
//El thunk es para realizar peticiones asyncronas
import thunk from 'redux-thunk';
import reducer from '../reducers';

export const store = createStore(
    //applyMiddleware solo se aplica por el thunk ya que el thunk permite funciones asincronas
    reducer, 
    compose(applyMiddleware(thunk),

    typeof window ==='object' && 
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
    
    )
);


