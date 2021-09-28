import React, { Suspense, lazy } from 'react'; //Suspense and lazy is used for lazy loading a Ui component.
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//import App from './App';
/*When using lazy loading, we should import the component in this way. 
lazy() method takes a call-back, in which we will import our component
using import() method.*/
const App = lazy( ()=> import('./App'));

ReactDOM.render(
  /*When using lazy() method for lazy loading component, we should wrap the componet within Suspense component
   and specify a fallback attribute within which we will specify what to dispaly while loading the 
   component wrapped around.*/
  <Suspense fallback={<div>Please wait ...</div>}>
      <App />
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
