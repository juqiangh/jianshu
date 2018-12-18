import React, {Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login'
import store from './store';
import {GlobalStyle} from './style';
import {GlobalIconFont} from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
        <Fragment>
          <GlobalStyle/>
          <GlobalIconFont/>
          <Provider store={store}>
              <BrowserRouter>
                  <div>
                      <Header/>
                      <Route path='/' exact component={Home}></Route>
                      <Route path='/login' exact component={Login}/>
                      <Route path='/detail/:id' exact component={Detail}></Route>
                  </div>
              </BrowserRouter>
          </Provider>
        </Fragment>
    );
  }
}

export default App;
