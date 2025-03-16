/*
// React imports, uncoment mounting below if you use React
import {createElement} from "react";
window.React={createElement} // JSX without importing all React
import { observable, configure } from "mobx";
import {observer} from "mobx-react-lite"
configure({enforceActions:"never"})  // must use actions in project for A

const reactiveModel= observable({ })  // dummy empty model
*/

// Vue imports
import{h, reactive, createApp} from "vue"
window.React={createElement:h}

const reactiveModel= reactive({ }); // dummy empty model


//------------ root component:

import {SuspenseView} from './views/suspenseView';
import {GoogleLogin} from './auth_presenters/googleLoginPresenter'
import {EmailPasswordLogin} from './auth_presenters/emailPasswordLoginPresenter'
import {Logout} from './auth_presenters/logoutPresenter'

const Root= //observer
(
function(props){
  if(props.model.user===undefined)
     return <SuspenseView  promise="dummy" />
  
  // TODO depending on model.user, show either login or logout (and the app, if model is ready)
  return <div> 
           {props.model.user?.uid}                         {" "}
           <GoogleLogin />{/*<EmailPasswordLogin/>*/}    {" "}
           <Logout />
         </div>;
})

// ------- bootstrapping
import {connectToPersistence} from "./firestoreModel"
connectToPersistence(reactiveModel)

// Vue mounting
const app = createApp(function(){ return <Root model={reactiveModel}/>});
app.mount('#app');

/*
// React mounting
import {createRoot} from "react-dom/client";
createRoot(document.getElementById('app')).render(<Root model= {reactiveModel}/>);
*/