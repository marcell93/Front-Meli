import * as React from 'react';
import { hot } from 'react-hot-loader';
import TopBar from './TopBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './../assets/scss/App.scss';
import { FC, ReactElement } from 'react';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure({
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: true,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: false,
  pauseOnHover: true
});

const App: FC = (): ReactElement => {
  return (
    <div className='app'>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route
            path='/items'
            component={ProductList}
          />
          <Route
            path='/items/:id'
            component={ProductDetail}
          />
          <Route
            path='/'
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
