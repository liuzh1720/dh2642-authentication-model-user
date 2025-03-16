import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./firebaseConfig.js";
import { getAuth, onAuthStateChanged} from "firebase/auth";

// this is a per-user persistence stub, it does not actually persist but manages firebase authentication and model.user

// this module is independent on the actual authentication method used (google, email+password, etc)

const app= initializeApp(firebaseConfig);

// auth is exported so it can be used by the UI
export const auth = getAuth(app);

export function connectToPersistence(model){
  // reaction or watch or other side effect can be imported directly from your reactive object framework (Mobx, Vue, Redux...) 

  // TODO: like in lab, register a side effect to save to persistence! 
  // unlike in the lab, use model.user (if truthy!) for the persisted document name
  
  onAuthStateChanged(auth, function logInOrOutACB(user){
      // TODO: set model.user! 
      // for A: use an action to set the 'user' property of the application state
      
      if(user){
        // somebody has just logged in!
        // TODO model.ready false
        // for A: use an action to set the 'ready' property of the application state
        console.log("now we need to read from persistence the data of "+user.uid);
        // TODO model.ready true at the end of the "read from persistence" promise chain
      }
  })
}

