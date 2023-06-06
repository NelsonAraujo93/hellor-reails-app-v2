import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/greeting';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Greeting/>
      </Provider>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);