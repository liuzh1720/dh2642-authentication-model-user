import {auth} from "../firestoreModel"
import {LoginWithView} from "../views/loginWithView"
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const provider = new GoogleAuthProvider();

// example of local state, to store the login error
// if you use local state with React, the presenter must be an observer

// const loginState= reactiveOrObservable({})

// or you can use component state instead. 

export function GoogleLogin(){
  function loginACB(){
    TODO_auth_call(auth, provider)
    .catch(console.error /* TODO save the error in some local app state or component state and send to the view */);
  }
  return <LoginWithView with="Google" onLogin={loginACB} />
}