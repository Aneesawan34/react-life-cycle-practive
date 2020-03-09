import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { combineReducers } from "redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
// import Thunk from "redux-thunk";
// import { createStore, applyMiddleware, compose } from "redux";
// import { rootReducer } from "./Reducer/Reducer";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// console.log("root reducer", rootReducer);
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(Thunk))
// );

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
