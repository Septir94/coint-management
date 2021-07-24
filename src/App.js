import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage';
import { initiateCointList } from './actions/CointsAction';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './configs/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HomePage/>
    </div>
    </Provider>
  );
}

export default App;
