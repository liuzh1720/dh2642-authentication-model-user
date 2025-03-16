import {auth} from "../firestoreModel"
import {EmailPasswordLoginView} from "../views/emailPasswordLoginView"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

// example of local state, to store the login error
// if you use local state with React, the presenter must be an observer

// const loginState= reactiveOrObservable({})

// or you can use component state instead. 

// you need to create a user before you can log in! replace TODO_auth_call with the appropriate firebase utility

export function EmailPasswordLogin(){
  function loginACB(username, password){
    TODO_auth_call(auth, otherParameters)
    .catch(console.error /* TODO save the error in some local app state or component state
    and send to the view */);

    // TODO: add a third parameter (sign-in or sign-up)
    // or keep sign-in vs sign-up state 
     
  }

  return <EmailPasswordLoginView onLogin={loginACB} />
}