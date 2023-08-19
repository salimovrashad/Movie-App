import { applyMiddleware, compose, createStore } from "redux"
import { movieReducer } from "../reducers/movieReducer";
import thunk from "redux-thunk";

const configureStore = ()=>{
    const store = createStore(movieReducer, compose(applyMiddleware(thunk)));
    return store;
}

export default configureStore;