import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter} from 'react-router-dom'
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';


// Domain - dev-g0piyhxgw3j5gqgn.us.auth0.com
// Client Id - g4vrvXCTmnlr1c1KpIU5A0aEpk27GVIq

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
       domain="dev-g0piyhxgw3j5gqgn.us.auth0.com"
       clientId="g4vrvXCTmnlr1c1KpIU5A0aEpk27GVIq"
       authorizationParams={{
         redirect_uri: `${window.location.origin}/Github-Users/#`
       }}
    >
      <HashRouter >
        <GithubProvider>
          <App />
        </GithubProvider>
      </HashRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
