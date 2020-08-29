import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore,applyMiddleware  } from "redux";
import { Provider } from "react-redux";
import {reducerSmurf} from "./reducers/index"
import thunk from "redux-thunk";


//create store and add middleware and thunk
const store = createStore(reducerSmurf,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
