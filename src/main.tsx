import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App/styles/all.style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style

import { store } from './App/redux/Store.redux.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
