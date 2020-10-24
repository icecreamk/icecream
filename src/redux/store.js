import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';
import promiseMiddleware from './middleware/promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

if (module.hot) {
    // 当修改reducer代码的时候，页面不要整个刷新，而是局部刷新
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}

export default store;