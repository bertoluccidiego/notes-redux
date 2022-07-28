import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import noteReducer from './reducers/noteReducer';

const store = createStore(noteReducer);

function renderApp() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App store={store} />
    </Provider>
  );
}

renderApp();
store.subscribe(renderApp);
