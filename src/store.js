import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducer/reducer";
import {watchGetData, watchSendOrder} from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchGetData);
sagaMiddleware.run(watchSendOrder);

export default store;