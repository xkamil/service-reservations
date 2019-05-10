import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import AppContainer from './container/ServiceList/ServiceListContainer';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import Store from './redux/Store';
import reducers from './redux/reducers';
import {BrowserRouter, Route} from "react-router-dom";
import LoginUserContainer from "./container/LoginUser/LoginUserContainer";
import RegisterUserContainer from "./container/RegisterUser/RegisterUserContainer";
import {updateServices} from "./redux/servicesActions";

const store = createStore(reducers);
Store.init(store);

const content = (
    <BrowserRouter>
        <Provider store={store}>
            <Route path="/login" exact component={LoginUserContainer}/>
            <Route path="/register" exact component={RegisterUserContainer}/>
            <Route path="/" component={AppContainer}/>
        </Provider>
    </BrowserRouter>
);


updateServices();
setInterval(updateServices, 4000);


ReactDOM.render(content, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
